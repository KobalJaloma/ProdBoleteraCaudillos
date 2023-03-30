import express from 'express';

import { createUsuario, getUsuariosById, getUsuarios, autenticarUsuario, updatePermisosUsuario} from "../controllers/UserController.js";

export const usuarios = express.Router();

usuarios.get('/', getUsuarios);
// GETUSAURIOS
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name: 
 *                  type: string
 *                  description: nombre usuario
 *              age:
 *                  type: integer
 *                  description: la edad del usuario
 *          required:
 *              - nombre 
 *              - edad
 *          example: 
 *              name: leonardo
 *              age: 19
 */

usuarios.get('/:id', getUsuariosById);
usuarios.post('/', createUsuario);
usuarios.post('/validate', autenticarUsuario);
usuarios.put('/permisos', updatePermisosUsuario);
