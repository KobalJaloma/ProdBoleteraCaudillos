import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Ingreso = reportesEmpresariales.define('ingresos', {
    id: {
        type: DataTypes.INTEGER
    },
    fecha: {
        type: DataTypes.STRING
    },
    fk_sucursal: {
        type: DataTypes.INTEGER
    },
    ingreso: {
        type: DataTypes.INTEGER
    }
});

export default Ingreso;

(async()=> {
    await reportesEmpresariales.sync();
})();