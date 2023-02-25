import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Recinto = db.define('recintos', {
    nombre: {
        type : DataTypes.STRING
    },
    direccion: {
        type : DataTypes.STRING
    },
    estatus: {
        type : DataTypes.INTEGER
    },
});

export default Recinto;

(async()=> {
    await db.sync();
})();