import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const TicketEnvio = db.define('tickets_envios', {
    fk_evento: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    tickets: {
        type: DataTypes.STRING
    }
});

export default TicketEnvio;

(async()=> {
    await db.sync();
})();