import { DataTypes } from "sequelize";
import db from '../config/db.js';

export const ZonaRecinto = db.define('zonas_recintos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    zona: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fk_evento: {
        type: DataTypes.INTEGER
    },
    fk_usuario_capturado: {
        type: DataTypes.STRING
    },
});

export default ZonaRecinto;

(async()=> {
    await db.sync();
})();