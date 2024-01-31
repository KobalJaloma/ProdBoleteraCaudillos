import TicketsReutilizables from '../models/TicketsReutilizablesModel.js';

export const getTickets = async(req, res) => {
  
  try {
    const tickes = await TicketsReutilizables.findAll();
    
    res.json(tickes)
  } catch (error) {
      res.json({
        "status": "ERROR",
        "error": error
      })
  }
}

export const createTicket = async(req, res) => {
  try {
    const ticket = await TicketsReutilizables.create(req.body);
    res.json({
      "message" : "Registro Creado Correctamente!!",
      "estatus" : "OK"
    });
  } catch (error) {
    res.json({
      "status": "FAIL",
      "message": "Hubo Un Problema En La Creacion Del Ticket"
    });
  }
}

export const addEventoTicket = async(req, res) => {
  try {
    const ticketInfo = await TicketsReutilizables.findAll({
      where: {
        codigo: req.query.codigo
      }
    });

    console.log(ticketInfo);
  } catch (error) {
    res.json({
      "status": "FAIL",
      "message": "Hubo Un Problema En La Actualizacion Del Ticket"
    });
  }
}