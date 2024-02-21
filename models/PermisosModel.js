import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Permiso = db.define('permisos', {
    estatus: {
        type : DataTypes.INTEGER
    },
    descripcion: {
        type : DataTypes.STRING
    },
});

export default Permiso;

(async()=> {
    await db.sync();
})();