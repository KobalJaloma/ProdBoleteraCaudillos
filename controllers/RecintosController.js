import Recinto from '../models/RecintosModel.js';

export const getRecintos = async(req, res) => {
    try {
        const recintos = await Recinto.findAll({
            attributes: ['id', 'nombre']
        });
        res.json(recintos);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const createRecinto = async(req, res) => {
    try {
        const recinto = await Recinto.create(req.body);
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