import express from 'express';
import cors from 'cors';
import { usuarios } from './routes/UserRoute.js';
import { eventos } from './routes/EventosRoutes.js'
import db from './config/db.js';

//IMPLEMENTS
const app = express();
app.use(cors());
app.use(express.json());

//ROUTES WITH CONTROLLERS
app.use('/usuarios', usuarios);
app.use('/eventos', eventos);

//VERIFICAR ESTATUS DE LA CONEXION
try {
    await db.authenticate();
    console.log('Conexion exitosa');
} catch (error) {
    console.log(`el error de conexion es ${error}`);
}

//TEST DE RUTAS
app.get('/', (req, res) => {
    res.send('Hello world');
});

//LISTENER DE EXPRESS
app.listen(8000, () => 
    console.log('server up and running in https://localhost:8000/'));