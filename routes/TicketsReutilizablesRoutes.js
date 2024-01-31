import express from 'express';
import { addEventoTicket, createTicket, getTickets } from "../controllers/TicketsReutilizablesController.js";

export const ticketsReutilizables = express.Router();

ticketsReutilizables.get('/', getTickets);


//POSTS
ticketsReutilizables.post('/', createTicket);
