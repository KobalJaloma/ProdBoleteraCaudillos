import express from "express";
import { createGafete, getGafete } from "../controllers/GafetesController.js";

export const gafetes = express.Router();

gafetes.get('/', getGafete);

gafetes.post('/', createGafete);