import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Usuario = db.define('usuarios', {
    nombreUsuario: {
        type : DataTypes.STRING,
        unique: true
    },
    nombre: {
        type : DataTypes.STRING
    },
    password: {
        type : DataTypes.STRING
    },
    estatus: {
        type : DataTypes.INTEGER
    },
    fk_permiso : {
        type : DataTypes.BIGINT
    }
});

export default Usuario;

(async()=> {
    await db.sync();
})();