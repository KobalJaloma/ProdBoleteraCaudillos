import { DataTypes } from "sequelize";
import db from '../config/db.js';

export const EscaneoBitacora = db.define('escaneos_bitacora', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.TEXT
    },
    tipo_escaneo: {
        type: DataTypes.STRING
    },
    fk_evento: {
        type: DataTypes.INTEGER
    },
    fk_usuario_capturado: {
        type: DataTypes.STRING
    }
});

export default EscaneoBitacora;

(async()=> {
    await db.sync();
})();