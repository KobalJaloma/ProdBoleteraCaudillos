import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Clientes = db.define('Clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
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
    imagen_perfil: {
        type: DataTypes.STRING
    },
})

export default Clientes;

(async() => {
    await db.sync();
})