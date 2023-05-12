import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Egreso = reportesEmpresariales.define('egresos', {
    egreso: {
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha: {                                                                                                                                                                                                                                                                                                                                
        type: DataTypes.STRING
    },
    fk_sucursal: {
        type: DataTypes.INTEGER
    },
}); 

export default Egreso;

(async()=> {
    await reportesEmpresariales.sync();
})();