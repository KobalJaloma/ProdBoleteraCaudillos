import express from 'express';

import {createTickets, getTickets, getTicketsEnvio, getTicketInfo, getTicketsEvento, getTicketsByUsuarioEscaneado, updateTicketsEnvio, updateTicketsQuemar} from '../controllers/TicketController.js';

export const tickets = express.Router();

tickets.get('/', getTickets);
tickets.get('/ticket/', getTicketInfo);
tickets.get('/evento/:id', getTicketsEvento);
tickets.get('/escaneado', getTicketsByUsuarioEscaneado);
tickets.post('/ticket/', getTicketInfo);

//actualizaciones
tickets.put('/envios/actualizarEstado', updateTicketsEnvio);
tickets.put('/quemarTicket', updateTicketsQuemar);

//posteos de tickets
tickets.post('/', createTickets);