import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Clientes = db.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    usado: {
        type: DataTypes.INTEGER //Temporal
    },
    imagen_perfil: {
        type: DataTypes.STRING
    },
    codigo_qr: {
        type: DataTypes.STRING
    }
})

export default Clientes;

(async() => {
    await db.sync();
})