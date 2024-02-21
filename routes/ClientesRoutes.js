import { createClientes, getCliente, getClienteId } from '../controllers/ClientesController.js';
import express from "express";

export const clientes = express.Router();

clientes.get('/', getCliente);
clientes.get('/:id', getClienteId);

clientes.post('/', createClientes);