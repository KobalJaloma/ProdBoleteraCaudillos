import { createClientes, getCliente, getClienteId, getClienteCodigo, quemarCliente} from '../controllers/ClientesController.js';
import { multerHelper } from '../helpers/uploadImages.js'
import express from "express";

export const clientes = express.Router();

clientes.get('/', getCliente);
// clientes.get('/:id', getClienteId);
clientes.get('/codigo', getClienteCodigo);

clientes.post('/', multerHelper('./public/uploads/clientes/perfil', null) , createClientes);


clientes.put('/codigo', quemarCliente);