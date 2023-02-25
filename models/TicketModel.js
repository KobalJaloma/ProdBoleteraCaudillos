import { DataTypes } from 'sequelize';
import db from '../config/db';

const Ticket = db.Sequelize('tickets',{
    estatus: {
        type : DataTypes.INTEGER
    },
    fk_evento : {
        type: DataTypes.BIGINT
    },
    fk_usuarioCap : {
        type: DataTypes.INTEGER
    }
});

export default Ticket;

(async()=> {
    await db.sync();
})();