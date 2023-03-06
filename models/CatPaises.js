import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Pais = db.define('cat_paises', {
    nombre: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.TINYINT
    }
});

export default Pais;

(async()=> {
    await db.sync();
})();