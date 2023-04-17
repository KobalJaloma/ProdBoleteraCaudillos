import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Egreso_d = reportes_empresariales.define('egresos_d', {
    id: {
        type: DataTypes.INTEGER
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
    await reportes_empresariales.sync();
})();