import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Egreso = reportes_empresariales.define('egresos', {
    egreso: {
        type: DataTypes.INTEGER
    },
    id_egresos: {
        type: DataTypes.INTEGER
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
    await reportes_empresariales.sync();
})();