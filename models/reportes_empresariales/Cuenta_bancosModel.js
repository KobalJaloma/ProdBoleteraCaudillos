import { DataTypes } from "sequelize";
import reportesEmpresariales from "../../config/ReportesEmpresarialesDb.js";

const Cuenta_bancos = reportesEmpresariales.define('cuenta_bancos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    cuenta: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.INTEGER
    }
});

export default Cuenta_bancos ;

(async()=> {
    await reportesEmpresariales.sync();
})();