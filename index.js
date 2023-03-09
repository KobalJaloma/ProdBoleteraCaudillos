import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import http from "http";
import https from "https";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//ROUTERS
import { usuarios } from './routes/UserRoute.js';
import { eventos } from './routes/EventosRoutes.js';
import { recintos } from "./routes/RecintosRoutes.js";
import { ubicaciones } from './routes/UbicacionesRoutes.js';
import { tickets } from './routes/TicketsRoutes.js';
import { permisos } from "./routes/PermisosRoutes.js";
import { Qrs } from './routes/QrRoutes.js';
import { reportes } from './routes/ReportesRoutes.js';
import { email } from './routes/MailerRoutes.js';
import { ticketsEnvios } from './routes/TicketsEnviosRoutes.js';



const credentials = {
    key: '',
    cert: '',
    ca: ''
}

//IMPLEMENTS
const app = express();
app.use(cors());
app.use(express.json());


//MIDDLEWARE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', express.static(path.resolve(__dirname, './public')));
//token de verif
app.use('/.well-known/acme-challenge/AEcakqjlc9xx4xPg97WCzHbzNwdZ8tJpfuWAStfsNOI', (req, res) => {
    res.send('AEcakqjlc9xx4xPg97WCzHbzNwdZ8tJpfuWAStfsNOI.EFZKts6_MGJTQ9yIM_Z1Nj-wabvsb2ZXuTo8uLh_hR4');
})


//ROUTES WITH CONTROLLERS
app.use('/api/usuarios', usuarios);
app.use('/api/eventos', eventos);
app.use('/api/recintos', recintos);
app.use('/api/ubicaciones', ubicaciones);
app.use('/api/tickets', tickets);
app.use('/api/permisos', permisos);
app.use('/api/generarQr', Qrs);
app.use('/api/reportes', reportes);
app.use('/api/email', email);
app.use('/api/ticketsEnvios', ticketsEnvios);

//TEST DE RUTAS
app.get('/api/test', (req, res) => {
    res.send('Hello world');
});

//VERIFICAR ESTATUS DE LA CONEXION
try {
    db.authenticate()
    .then( response => console.log('Conexion exitosa'));
} catch (error) {
    console.log(`el error de conexion es ${error}`);
}

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);


httpServer.listen(80, () => {
    console.log('Escuchando puerto 80');
});