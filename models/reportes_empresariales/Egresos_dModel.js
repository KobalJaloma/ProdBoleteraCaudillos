import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Egreso_d = reportesEmpresariales.define('egresos_d', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fk_egresos: {
        type: DataTypes.INTEGER
    }
});

export default Egreso_d ;

(async()=> {
    await reportesEmpresariales.sync();
})();