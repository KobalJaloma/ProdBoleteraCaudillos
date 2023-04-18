import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Empresa = reportesEmpresariales.define('empresas', {
    nombre: {
        type: DataTypes.STRING
    },
    id_empresa: {
        type: DataTypes.INTEGER
    }
});

export default Empresa;

(async()=> {
    await reportesEmpresariales.sync();
})();