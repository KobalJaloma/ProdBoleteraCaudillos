import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Evento = db.define('eventos', {
    nombre: {
        type : DataTypes.STRING
    },
    fechaHora: {
        type : DataTypes.DATE
    },
    fk_recinto: {
        type : DataTypes.BIGINT
    },
    fk_empresa: {
        type : DataTypes.BIGINT
    },
    estatus : {
        type : DataTypes.INTEGER
    }
});

export default Evento;

(async()=> {
    await db.sync();
})();