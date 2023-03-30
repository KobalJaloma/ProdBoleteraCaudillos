import { getEmpresas, createEmpresa } from "../controllers/EmpresasController.js";
import express from "express";

export const empresas = express.Router();

empresas.get('/', getEmpresas);
empresas.post('/', createEmpresa);