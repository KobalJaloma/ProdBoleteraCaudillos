import express from "express";
import { getCuentaBancos } from "../../controllers/reportes_empresariales/Cuenta_bancosController";

export const EmpresarialesCuentaBancos = express.Router();

EmpresarialesCuentaBancos.get('/', getCuentaBancos);