import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import serverless from 'serverless-http';
// import history from "connect-history-api-fallback";
// import path from "path";
import path, {dirname} from 'path';

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
import { fileURLToPath } from 'url'




//IMPLEMENTS
const app = express();
app.use(cors());
app.use(express.json());

//MIDDLEWARE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', express.static(path.resolve(__dirname, './public')));

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

//VERIFICAR ESTATUS DE LA CONEXION
try {
    await db.authenticate();
    console.log('Conexion exitosa');
} catch (error) {
    console.log(`el error de conexion es ${error}`);
}

//TEST DE RUTAS
app.get('/api/test', (req, res) => {
    res.send('Hello world');
});

//LISTENER DE EXPRESS
app.listen(8000, () => 
    console.log('server up and running in https://localhost:8000/'));
