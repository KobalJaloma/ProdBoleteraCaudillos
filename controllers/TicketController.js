import Ticket from "../models/TicketModel.js";
import Evento from "../models/EventosModel.js";
import { crearQrPng } from "../helpers/crearQr.js";
import { encriptarPassword } from "../helpers/passwordEncript.js";
import { Sequelize } from "sequelize";

export const getTickets = async(req, res) => {
    try {
        const tickets = await Ticket.findAll({
            attributes: ["id", "codigo", "estatus", "fk_usuarioCap", "fk_usuarioEscaneado", 'fk_evento']
        });
        res.json(tickets);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getTicketInfo = async(req, res) => {

    console.log(req.body);

    try {
        const tickets = await Ticket.findAll({
            attributes: ["id", "codigo", "estatus"],
            where: {
                codigo: req.query.codigo
            }
        });
        res.json(tickets);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}
export const getTicketsEvento = async(req, res) => {


    try {
        const tickets = await Ticket.findAll({

            where: {
                fk_evento: req.params.id
            }
        });
        res.json(tickets);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getTicketsEnvio = async(req, res) => {
    try {
        const tickets = await Ticket.findAll({
            attributes: ["id", "codigo", "estatus", "fk_usuarioCap" ],
            where: {
                estatus_envio: 1, //MIENTRAS ESTEN DISPONIBLES
                estatus: 1,
                fk_evento: req.params.evento
            }
        });
        res.json(tickets);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}
export const getTicketsEscaneados = async(req, res) => {
    const atributos = req.query.atributos.split(',');
    const evento = req.query.evento;
    //?atributos=id,codigo,updatedAt&evento=11&usuario=0

    const payload = {
        attributes: atributos || '*',
            where: {
                fk_evento: evento || '*',
                estatus: 0
            }
    }

    try {
        const tickets = await Ticket.findAll(payload);
        res.json(tickets);
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: error
        });
    }
}

export const getTicketsByUsuarioEscaneado = async(req, res) => {
    const atributos = req.query.atributos.split(',');
    const evento = req.query.evento;
    const usuario = req.query.usuario;
    //?atributos=id,codigo,updatedAt&evento=11&usuario=0

    const payload = {
        attributes: atributos || '*',
            where: {
                fk_evento: evento || '*',
                fk_usuarioEscaneado: usuario || '*',
                estatus: 0
            }
    }

    try {
        const tickets = await Ticket.findAll(payload);
        res.json(tickets);
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: error
        });
    }
}

export const getTicketsQr = async(req, res) => {
    
    console.log(req.query);
    const { evento, limit, offset} = req.query;

    try {
        const tickets = await Ticket.findAll({
            attributes: ['codigo_qr'],
            where: {
                fk_evento: evento
            },
            limit: limit ? parseInt(limit) : 100000,
            offset: offset ? parseInt(offset) : 0
        });

        var ticketsArray = [];

        tickets.map(( {codigo_qr} ) => ticketsArray.push(codigo_qr));

        res.json(ticketsArray);
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: error
        });
    }
}

export const updateTicketsEnvio = async(req, res) => {
    try {
        const ticket = await Ticket.update(
            {
                estatus_envio: 0
            },
            {
                where: {
                    codigo: req.body.codigo
                }
            }
        );
        res.json({
            estatus: 'OK',
            message: 'Se Actualizo Correctamente'
        });
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: 'No se pudo actualizar el estado'
        });
    }
}
export const updateTicketsQuemar = async(req, res) => {
    try {
        const ticket = await Ticket.update(
            {
                estatus: 0,
                fk_usuarioEscaneado: req.body.usuario
            },
            {
                where: {
                    codigo: req.body.codigo
                }
            }
        );
        res.json({
            estatus: 'OK',
            message: 'El Tickete Se Utilizo de Forma Correcta'
        });
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: 'No se pudo actualizar el estado'
        });
    }
}

export const createTickets = async(req, res) => {
    //SE NECESITA ENVIAR UN POST CON CANTIDAD Y EVENTO PARA LA GENERACION MASIVA
    try {
        const {  cantidad, evento, usuario } = req.body;

        const existencia = await Ticket.count({ where: {fk_evento: evento} }); //ver cuantos tickets hay en existencia
        const simbolosBoleto = '?@'; 

        //Extreaer el ticket de mayor valor por codigo
        let codigoActual = 0;
        if(existencia != 0) {
            const codigoRes = await Ticket.findAll({
                attributes: ['codigo'],
                where: {
                    fk_evento: evento
                },
                order: [['id', 'desc']],
                limit: 1
            });
            const numActual = parseInt(codigoRes[0].codigo.substr( evento.toString().length + simbolosBoleto.length )); //obtener el numero de ticket
            codigoActual = numActual;
        }

        for (let index = 1; index <= cantidad; index++) {
            //generacion de clave de ticket
            const ticketCode = `${evento}${simbolosBoleto}${ existencia != 0 ? index + codigoActual : index }`; //si hay tickets en existencia se guardaran desde 0 si no, desde el ultimo codigo unico en adelante
            
            const ticketEncode = encriptarPassword(ticketCode);
            var qrBase64 = await crearQrPng(ticketEncode);
            
            console.log(qrBase64);
            
            const payload = {
                codigo: ticketEncode,
                estatus: 1,
                estatus_envio: 1,
                codigo_qr: qrBase64 || '',
                fk_evento: `${evento}`,
                fk_usuarioCap: usuario,
                fk_usuarioEscaneado:  0
            };
            await Ticket.create(payload);
        }
        res.json({
            "message" : "Se Crearon Los Tickets Con Exito",
            "estatus" : "OK"
        });
    } catch (error) {
        res.json({
            "message" : "Hubo Un Problema En La Creacion Del Ticket",
            "estatus" : "FAIL"
        });
    }
}