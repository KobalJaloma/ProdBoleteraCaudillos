import { Gafete } from '../models/GafetesModel.js';
import { errorResponse, failResponse, successResponse } from "../types/jsonResponses.js";

export const getGafete = async(req, res) => {
  const { atributos } = req.query;  
  try {
    const gafete = await Gafete.findAll({
      attributes: !!atributos ? atributos.split(',') : []
    });
    
    res.json(gafete)
  } catch (error) {
      res.json(errorResponse(null, error))
  }
}

export const createGafete = async(req, res) => {
  const payload = req.body;
  try {
    
    await Gafete.create(payload);
    
    res.json(successResponse('Tu Gafete Fue Creado Exitosamente'));

  } catch (error) {
    res.json(errorResponse(null, error));
  }
}