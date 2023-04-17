import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
//sacar el riname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});
console.log("Este es el usuario " + process.env.NODE_ENV);
// config.js
export const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    //db hosts
    HOST: process.env.HOST || 'localhost',

    //db config 
    DB_NAME: process.env.DB_NAME || 'boletera',
    DB_NAME_REPORTES_EMPRESARIALES: process.env.DB_NAME_REPORTES_EMPRESARIALES || 'REPORTES_EMPRESARIALES',
    DB_USER: process.env.DB_USER || 'procesos',
    DB_PASSWORD: process.env.DB_PASSWORD || '2xK#iz&Gl715',

    //ports
    PORT: process.env.PORT || 8000,
    HTTPPORT: process.env.HTTPPORT || 80,
    HTTPSPORT: process.env.HTTPSPORT || 344,

    //rutas
    DB_ROUTE: process.env.DB_ROUTE || 'http://localhost:8000/'
  }