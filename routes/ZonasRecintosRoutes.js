import { createZona, getZonas, getZonasByEvento } from "../controllers/ZonasRecintosController.js";
import express from "express";

export const zonasRecintos = express.Router();

zonasRecintos.get('/', getZonas);
zonasRecintos.get('/evento/:evento', getZonasByEvento);

zonasRecintos.post('/', createZona);
