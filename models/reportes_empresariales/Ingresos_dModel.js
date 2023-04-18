import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Ingreso_d = reportesEmpresariales.define('ingresos_d', {
    id: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fk_ingresos: {
        type: DataTypes.INTEGER
    }
});

export default Ingreso_d;

(async()=> {
    await reportesEmpresariales.sync();
})();