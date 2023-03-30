import express from 'express';

import {createTickets, getTickets, getTicketsEnvio, getTicketInfo, getTicketsEvento, getTicketsEscaneados,
    getTicketsByUsuarioEscaneado, updateTicketsEnvio, updateTicketsQuemar} from '../controllers/TicketController.js';

export const tickets = express.Router();

tickets.get('/', getTickets);
tickets.get('/ticket/', getTicketInfo);
tickets.get('/evento/:id', getTicketsEvento);
tickets.get('/escaneado', getTicketsEscaneados);
tickets.get('/escaneado/usuario', getTicketsByUsuarioEscaneado); //regresa los tickets escaneados por cada usuario
tickets.get('/envios/disponibles/:evento', getTicketsEnvio); //regresa los tickets disponibles para el envio

//actualizaciones
tickets.put('/envios/actualizarEstado', updateTicketsEnvio);
tickets.put('/quemarTicket', updateTicketsQuemar);

//posteos de tickets
tickets.post('/', createTickets);