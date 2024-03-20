import { EscaneoBitacora } from "../models/EscaneosBitacoraModel.js";
import { errorResponse, failResponse, successResponse } from "../types/jsonResponses.js";


export const createEscaneosBitacora = async(req, res) => { 
    const payload = req.body;
    
    try {
        await EscaneoBitacora.create(payload);

        res.json(successResponse('Tu Escaneo Fue Almacenado Con Exito'));
    } catch (error) {
        res.json(errorResponse(null, error));
    }
}