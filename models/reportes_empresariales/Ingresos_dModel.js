import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Ingreso_d = reportes_empresariales.define('ingresos_d', {
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
    await reportes_empresariales.sync();
})();