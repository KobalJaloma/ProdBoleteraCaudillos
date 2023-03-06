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
    cordenadas: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    }
});

export default Recinto;

(async()=> {
    await db.sync();
})();