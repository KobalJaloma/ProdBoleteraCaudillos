import { ZonaRecinto } from "../models/ZonasRecintosModel.js";
import { errorResponse, failResponse, successResponse } from "../types/jsonResponses.js";

export const getZonas = async(req, res) => { 
    const { atributos } = req.query;

    try {
        const zonas = await ZonaRecinto.findAll({
            attributes: !!atributos ? atributos.split(',') : []
        });
        
        res.json(zonas);
        
    } catch (error) {
        res.json(errorResponse(null, error));
    }
}

export const getZonasByEvento = async(req, res) => { 
    const { atributos } = req.query;
    const evento = req.params.evento;

    try {
        const zonas = await ZonaRecinto.findAll({
            attributes: !!atributos ? atributos.split(',') : [],
            where: {
                fk_evento: evento
            }
        });
    } catch (error) {
        res.json(errorResponse(null, error));
    }
}

export const createZona = async(req, res) => { 
    try {
        const payload = req.body;
        await ZonaRecinto.create(payload);
        
        res.json(successResponse('Tu Zona Fue Creada Con Exito'));

    } catch (error) {
        res.json(errorResponse(null, error));
    }
}

export const createZonas = async(req, res) => {
    try {
        const object = req.body;
        const recinto = object.recinto;
        const zonas = object.zonas;

        if(!id || !zonas)   
            return res.json(failResponse(`Los Requerimeintos Son incompletos`, 'INCOMPLETO', 'NOT'));

        const payload = zonas.map((value) => { 
            return {
                zona: value.zona, 
                descripcion: value.description,
                fk_evento:  recinto.id,
                
            }
        });

    } catch (error) {
        res.json(successResponse(null, error));
    }
}