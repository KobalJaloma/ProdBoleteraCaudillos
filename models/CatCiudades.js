import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Ciudad = db.define('cat_ciudades', {
    nombre: {
        type: DataTypes.STRING
    },
    fk_estado: {
        type: DataTypes.BIGINT
    }
});

export default Ciudad;

(async()=> {
    await db.sync();
})();