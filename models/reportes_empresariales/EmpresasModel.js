import { DataTypes } from "sequelize";
import { reportes_empresariales } from "../../config/db.js";

const Empresa = reportes_empresariales.define('empresas', {
    nombre: {
        type: DataTypes.STRING
    },
    id_empresa: {
        type: DataTypes.INTEGER
    }
});

export default Empresa;

(async()=> {
    await reportes_empresariales.sync();
})();