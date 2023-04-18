import { Sequelize } from "sequelize";
import { config } from "../config.js";

//nuevo enlaze de DB para los endpoints de la app de reportes empresariales
export const reportesEmpresariales = new Sequelize(config.DB_NAME_REPORTES_EMPRESARIALES, config.DB_USER, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: 'mysql'
});

export default reportesEmpresariales;