import express from "express";
import { getCuentaBancos } from "../../controllers/reportes_empresariales/Cuenta_bancosController";

export const empresarialesCuentaBancos = express.Router();

empresarialesCuentaBancos.get('/', getCuentaBancos);