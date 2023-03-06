import express from 'express';
import { createTicketEnvio, getTicketsEnvios } from "../controllers/TicketsEnviosController.js";

export const ticketsEnvios = express.Router();

ticketsEnvios.get('/:id', getTicketsEnvios);
ticketsEnvios.post('/', createTicketEnvio);