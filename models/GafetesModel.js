import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Gafete = db.define('tickets_reutilizables', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING
    },
    estatus: {
      type: DataTypes.BIGINT
    },
    zonas: {
      type: DataTypes.STRING,
      defaultValue: "['All']" //se guarda All porque es All Access
    },
    fk_usuario_cap: {
      type: DataTypes.INTEGER
    }
});

export default Gafete;

(async()=> {
    await db.sync();
})();