import { Sequelize } from "sequelize";
import { config } from "../config.js";

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: 'mysql'
});

<<<<<<< HEAD
//nuevo enlaze de DB para los endpoints de la app de reportes empresariales
// export const reportes_empresariales = new Sequelize(config.DB_NAME_REPORTES_EMPRESARIALES, config.DB_USER, config.DB_PASSWORD, {
//     host: config.HOST,
//     dialect: 'mysql'
// });

=======
>>>>>>> 2e1cab046f2043e3996d6f9f5d83dfa1a92563e3
export default db;