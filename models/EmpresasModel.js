import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Empresa = db.define('empresas', {
    nombre: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    rfc: {
        type: DataTypes.STRING
    },

});

export default Empresa;

(async()=> {
    await db.sync();
})();