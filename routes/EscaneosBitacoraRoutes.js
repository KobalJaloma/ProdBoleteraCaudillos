import { createEscaneosBitacora } from "../controllers/EscaneosBitacoraController.js";
import express from "express";

export const escaneosBitacora = express.Router();

escaneosBitacora.post('/', createEscaneosBitacora);
