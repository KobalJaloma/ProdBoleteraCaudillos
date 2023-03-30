import Evento from "../models/EventosModel.js";

export const getEventos = async(req, res) => {
    var atributos = req.query.atributos;
    //evalua si no es al;gun valor null o undefined
    if(atributos) {
        atributos = atributos.split(',');
    }

    try {
        const eventos = await Evento.findAll({
            attributes: atributos || ['id', 'nombre', 'fk_recinto', 'fechaHora'],
            order: [
                ['fechaHora', 'DESC']
            ]
        });
        res.json(eventos);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getEventoById = async(req, res) => {
    try {
        const evento = await Evento.findAll({
            where: {
                id: req.params.id // /:id 
            }
        });
        res.json(evento);

    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const createEvento = async(req, res) => {
    try {
        const evento = await Evento.create(req.body); 
        res.json({
            "message" : "Registro Creado Correctamente!!",
            "estatus" : "OK"
        });      
    } catch (error) {
        res.json({
            "message" : "Hubo Un Problema En La Creacion Del Evento",
            "estatus" : "FAIL"
        });     
    }
    
}
