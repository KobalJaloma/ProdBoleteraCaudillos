import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Permiso = db.define('permisos', {
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