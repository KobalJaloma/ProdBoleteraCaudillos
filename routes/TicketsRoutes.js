import express from 'express';

import {createTickets, getTickets, getTicketsEnvio, getTicketInfo, updateTicketsEnvio, updateTicketsQuemar} from '../controllers/TicketController.js';

export const tickets = express.Router();

tickets.get('/', getTickets);
tickets.post('/ticket/', getTicketInfo);
tickets.get('/envios/:id', getTicketsEnvio);

//actualizaciones
tickets.put('/envios/actualizarEstado', updateTicketsEnvio);
tickets.put('/quemarTicket', updateTicketsQuemar);

//posteos de tickets
tickets.post('/', createTickets);