import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Ingreso = reportes_empresariales.define('ingresos', {
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
    await reportes_empresariales.sync();
})();