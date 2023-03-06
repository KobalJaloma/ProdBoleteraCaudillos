import express from 'express';
import { getPermisos } from '../controllers/PermisosController.js';

export const permisos = express.Router();

permisos.get('/', getPermisos);