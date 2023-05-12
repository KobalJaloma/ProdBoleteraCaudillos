import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Empresa = reportesEmpresariales.define('empresas', {
    nombre: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});

export default Empresa;

(async()=> {
    await reportesEmpresariales.sync();
})();