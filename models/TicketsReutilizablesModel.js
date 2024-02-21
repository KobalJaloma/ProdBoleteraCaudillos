import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const TicketsReutilizables = db.define('tickets_reutilizables', {
    codigo: {
        type: DataTypes.STRING
    },
    estatus: {
        type: DataTypes.BIGINT
    },
    eventos: {
      type: DataTypes.STRING //Se guardaran como una matriz
    },
    fk_usuario_cap: {
      type: DataTypes.INTEGER
    },
    fk_cliente: {
      type: DataTypes.INTEGER
    }
});

export default TicketsReutilizables;

(async()=> {
    await db.sync();
})();