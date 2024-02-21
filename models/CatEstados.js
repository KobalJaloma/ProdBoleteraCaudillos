import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Estado = db.define('cat_estados', {
    nombre: {
        type: DataTypes.STRING
    },
    fk_pais: {
        type: DataTypes.BIGINT
    }
});

export default Estado;

(async()=> {
    await db.sync();
})();