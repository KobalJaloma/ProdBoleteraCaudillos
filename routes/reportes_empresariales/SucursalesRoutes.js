import express from "express";
import { getSucursales } from "../../controllers/reportes_empresariales/SucursalesController.js";

export const empresarialesSucursales = express.Router();

empresarialesSucursales.get('/', getSucursales);