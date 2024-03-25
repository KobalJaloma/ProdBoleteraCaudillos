import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import http from "http";
import https from "https";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import multer from "multer";
import bodyParser from "body-parser";

//Variables de entorno
import { config } from './config.js'; 

//MIGRACIONES
import { syncMigrations } from "./migrations/index.js";

//ROUTERS
import { usuarios } from './routes/UserRoute.js';
import { eventos } from './routes/EventosRoutes.js';
import { recintos } from "./routes/RecintosRoutes.js";
import { ubicaciones } from './routes/UbicacionesRoutes.js';
import { tickets } from './routes/TicketsRoutes.js';
import { permisos } from "./routes/PermisosRoutes.js";
import { Qrs } from './routes/QrRoutes.js';
import { reportes } from './routes/ReportesRoutes.js';
// import { email } from './routes/MailerRoutes.js';
import { ticketsEnvios } from './routes/TicketsEnviosRoutes.js';
import { empresas } from './routes/EmpresasRoutes.js';
import { clientes } from "./routes/ClientesRoutes.js";
import { escaneosBitacora } from "./routes/EscaneosBitacoraRoutes.js";
import { zonasRecintos } from "./routes/ZonasRecintosRoutes.js";

// app.post('/api/upload', upload.single('file'), (req, res) => {
//     if(!req.file)
//         return res.status(400).send('No file Upload')
//     console.log(req.file);
//     console.log(JSON.parse(req.body.jsonData));
//     res.send('Archivo de imagen almacenado correctamento');
// });


//app config
const app = express();
app.use(cors());
app.use(express.json());
syncMigrations(); //SINCRONIZA LOS CAMBIOS HECHOS EN LOS MODELOS

// Configurar bodyParser para manejar solicitudes con payloads grandes
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


//importar el dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//MIDDLEWARE
app.use('/', express.static(path.resolve(__dirname, './public')));
//token de verif
app.use('/.well-known/acme-challenge/AEcakqjlc9xx4xPg97WCzHbzNwdZ8tJpfuWAStfsNOI', (req, res) => {
    res.send('AEcakqjlc9xx4xPg97WCzHbzNwdZ8tJpfuWAStfsNOI.EFZKts6_MGJTQ9yIM_Z1Nj-wabvsb2ZXuTo8uLh_hR4');
})


// Certificate is saved at: /etc/letsencrypt/live/elboletero.mx/fullchain.pem
// Key is saved at:         /etc/letsencrypt/live/elboletero.mx/privkey.pem

//certificado SSL
const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/elboletero.mx/privkey.pem'),
    certificate: fs.readFileSync('/etc/letsencrypt/live/elboletero.mx/fullchain.pem')
}

//SWAGGER CONFIGURACIONES - UI DE EL API
const swaggerSpecifi = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node Mysql API',
            version: '1.0.0'
        },
        servers: [
            {
                url: config.DB_ROUTE
            }
        ]
    },
    apis: [`${path.join(__dirname,'./routes/*.js')}`]
}

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpecifi)));

//RUTAS DE LOS CONTROLADORES
app.use('/api/usuarios', usuarios);
app.use('/api/eventos', eventos);
app.use('/api/recintos', recintos);
app.use('/api/ubicaciones', ubicaciones);
app.use('/api/tickets', tickets);   
app.use('/api/permisos', permisos);
app.use('/api/generarQr', Qrs);
app.use('/api/reportes', reportes);
app.use('/api/ticketsEnvios', ticketsEnvios);
app.use('/api/empresas', empresas);
app.use('/api/clientes', clientes);
app.use('/api/zonasRecintos', zonasRecintos);
app.use('/api/escaneosBitacora', escaneosBitacora);
// app.use('/api/email', email);


//TEST DE RUTAS
app.get('/api/test', (req, res) => { 
    res.send(`'Hello world' ${config.DB_NAME} ${config.DB_USER} ${config.DB_PASSWORD}`);
});

//REDIRECCIONAR EN RUTAS DESCONOCIDAS
app.get('*', function(req, res){
    res.status(404).redirect('/');
});
// app.use('*', ()=> {
    // })
    

//VERIFICAR ESTATUS DE LA CONEXION
try {
    db.authenticate()
    .then( response => console.log('Conexion exitosa'));
} catch (error) {
    console.log(`el error de conexion es ${error}`);
}

//PROTOCOLOS DE LA WEB
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.listen(config.PORT, (res, req) => {
    console.log(`Escuchando el puerto ${config.PORT} para el API`);
});

httpsServer.listen(443, () => {
    console.log('escuchando el puerto 443')
})

httpServer.listen(80, () => {
    console.log('Escuchando puerto 80');
});


