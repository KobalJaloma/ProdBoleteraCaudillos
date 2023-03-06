import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Ticket = db.define('tickets',{
    codigo: {
        type: DataTypes.STRING
    },
    estatus: {
        type : DataTypes.INTEGER
    },
    estatus_envio: {
        type : DataTypes.INTEGER
    },
    fk_evento : {
        type: DataTypes.BIGINT
    },
    fk_usuarioCap : {
        type: DataTypes.INTEGER
    },
    fk_usuarioEscaneado: {
        type: DataTypes.INTEGER
    }
});

export default Ticket;

(async()=> {
    await db.sync();
})();

//ESTATUS 1 DISPOINLE ,  ESTATUS 0 NO DISPONIBLE