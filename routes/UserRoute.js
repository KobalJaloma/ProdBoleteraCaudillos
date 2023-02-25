import express from 'express';

import { createUsuario, getUsuariosById, getUsuarios, autenticarUsuario } from "../controllers/UserController.js";

export const usuarios = express.Router();

usuarios.get('/', getUsuarios);
usuarios.get('/:id', getUsuariosById);
usuarios.post('/', createUsuario);
usuarios.post('/validate', autenticarUsuario);
