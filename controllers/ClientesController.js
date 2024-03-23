import Clientes from '../models/ClientesModel.js';
import { encriptarPassword } from "../helpers/passwordEncript.js";
import { errorResponse, failResponse, successResponse } from "../types/jsonResponses.js";

export const getCliente = async(req, res) => {
    const querys = req.query.atributos;
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');
        const clientes = await Clientes.findAll({
            attributes: !!atributos ? atributos : []
        });

        res.json(clientes);
    } catch (error) {
        
    }
}

export const getClienteId = async(req, res) => {
    const querys = req.query.atributos;
    const id = req.params.id;
    console.log(id);
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');

        const cliente = await Clientes.findAll({
            attributes: !!atributos ? atributos : [],
            where: {
                id: id 
            }
        });
        console.log(cliente);
        res.json(cliente);
    } catch (error) {
        
    }
}

export const getClienteCodigo = async(req, res) => {
    const querys = req.query.atributos;
    const codigo = req.query.codigo;
    console.log(codigo);
    console.log(req.query);
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');

        const cliente = await Clientes.findAll({
            attributes: !!atributos ? atributos : [],
            where: {
                codigo_qr: codigo 
            }
        });
        console.log(cliente);
        res.json(cliente);
    } catch (error) {
        
    }
}

export const createClientes = async(req, res) => {
    try {
        const { path } = req.file;

        const data = JSON.parse(req.body.jsonData);
        console.log(data);

        const payload = {
            ...data, 
            imagen_perfil: path.substr('7') //quitar public de la ruta 
        }
        
        const clientePromise = await Clientes.create(payload);

        const clienteId = clientePromise.id;
        const hashChars = '!?@$?';
        const uniqueCode = `${clienteId}${hashChars}${data.nombre}`;
        const hashCode = await encriptarPassword(uniqueCode);

        await Clientes.update({ codigo_qr: hashCode }, {
            where: {
                id: clienteId
            }
        });

        res.json({
            estatus: 'OK',
            message: 'Su creacion fue exitosa',
            data: req.body
        });
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: 'Hubo un error en la creacion del cliente',
            error
        });
    }
}

export const updateCliente = async(req, res) => {

    const { id } = req.params

    const payload = req.body;

    try {
        await Clientes.update(payload, {
            where: {
                id: id
            }
        });

        res.json({
            estatus: 'OK',
            message: 'Los Datos Se Actualizaron Con Exito'
        });
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: 'Hubo Un Error En La Actualizacion De Datos',
            error
        });
    }
}

export const quemarCliente = async(req, res) => {
    try {
        const { codigo, cliente } = req.body;

        if(!codigo) return res.json(failResponse("No Se Recibio El Codigo"));
        if(!cliente) return res.json(failResponse("No Se Recibio El Cliente"));
         
        const payload = {
            usado: 1 //temporal
        }
        await Clientes.update(payload, {
            where: {
                id: cliente,
                codigo_qr: codigo
            }
        });

        res.json(successResponse("Tu Cliente Se Guardo"))

    } catch (error) {
        res.json(errorResponse(null, error))
    }
}
