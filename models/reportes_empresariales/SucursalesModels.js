import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Sucursal = reportesEmpresariales.define('sucursales', {
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
    await reportesEmpresariales.sync();
})();