import express from "express";

import {createEvento, getEventoById, getEventos} from '../controllers/EventosController.js';

export const eventos = express.Router();

eventos.get('/', getEventos);
eventos.get('/:id', getEventoById);
eventos.post('/', createEvento);