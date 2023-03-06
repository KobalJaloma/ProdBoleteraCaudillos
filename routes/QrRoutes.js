import express from 'express';
import { GenerarQR } from '../controllers/QrController.js';

export const Qrs = express.Router();

Qrs.post('/', GenerarQR);