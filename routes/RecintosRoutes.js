import express from 'express';

import {createRecinto, getRecintos} from '../controllers/RecintosController.js';

export const recintos = express.Router();

recintos.get('/', getRecintos);
recintos.post('/', createRecinto);