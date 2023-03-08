import express from 'express';
import { GenerarQR, GenerarQRPng } from '../controllers/QrController.js';

export const Qrs = express.Router();

Qrs.post('/', GenerarQR);
Qrs.post('/png', GenerarQRPng);