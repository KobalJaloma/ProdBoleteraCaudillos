import { Sequelize } from "sequelize";
import { config } from "../config.js";

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: 'mysql'
});

//nuevo enlaze de DB para los endpoints de la app de reportes empresariales
// export const reportes_empresariales = new Sequelize(config.DB_NAME_REPORTES_EMPRESARIALES, config.DB_USER, config.DB_PASSWORD, {
//     host: config.HOST,
//     dialect: 'mysql'
// });

export default db;