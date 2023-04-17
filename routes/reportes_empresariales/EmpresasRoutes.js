import express from "express";
import { getEmpresas } from "../../controllers/reportes_empresariales/EmpresasController.js";

export const empresarialesEmpresas = express.Router();

empresarialesEmpresas.get('/', getEmpresas);