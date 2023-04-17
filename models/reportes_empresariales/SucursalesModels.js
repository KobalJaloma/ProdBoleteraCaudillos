import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Sucursal = reportes_empresariales.define('sucursales', {
    nombre: {
        type: DataTypes.STRING
    },
    id_sucursales: {
        type: DataTypes.INTEGER
    },
    fk_empresas: {
        type: DataTypes.INTEGER
    },
});

export default Sucursal;

(async()=> {
    await reportes_empresariales.sync();
})();