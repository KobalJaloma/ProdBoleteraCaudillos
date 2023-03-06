import { sendEmail } from '../controllers/MailerController.js';
import express from "express";

export const email = express.Router();

email.post('/', sendEmail);
