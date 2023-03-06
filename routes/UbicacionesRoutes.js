import express from 'express';

import { getCiudades, getCiudadesById, createManyCiudades, getCiudadesByEstados } from "../controllers/CiudadesController.js";
import { getEstados, getEstadosById, getEstadosByPais, createManyEstados } from "../controllers/EstadosController.js";
import { getPaises, getPaisesById, createPaises, createManyPaises} from "../controllers/PaisesController.js";

export const ubicaciones = express.Router();

//paises
ubicaciones.get('/paises', getPaises);
ubicaciones.get('/paises/:id', getPaisesById);
ubicaciones.post('/paises', createPaises);
ubicaciones.post('/paises/manyPaises', createManyPaises);
//estados
ubicaciones.get('/estados', getEstados);
ubicaciones.get('/estados/:id', getEstadosById);
ubicaciones.get('/estados/estadosPais/:pais', getEstadosByPais);
ubicaciones.post('/estados/manyEstados', createManyEstados);

//ciudades
ubicaciones.get('/ciudades', getCiudades);
ubicaciones.get('/ciudades/:id', getCiudadesById);
ubicaciones.get('/ciudades/ciudadesEstado/:estado', getCiudadesByEstados);
ubicaciones.post('/ciudades/manyCiudades', createManyCiudades);

