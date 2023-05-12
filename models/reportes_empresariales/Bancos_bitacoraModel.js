import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Bancos_bitacora = reportesEmpresariales.define('bancos_bitacora', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fk_cuenta_bancos: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.DECIMAL
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    }
});

export default Bancos_bitacora ;

(async()=> {
    await reportesEmpresariales.sync();
})();