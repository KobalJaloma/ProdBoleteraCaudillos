import express from 'express';
import { createTicketEnvio, getTicketsEnvios } from "../controllers/TicketsEnviosController.js";

export const reportes = express.Router();

reportes.get('/ticketEnvios/:id', getTicketsEnvios);
reportes.post('/ticketEnvios', createTicketEnvio);