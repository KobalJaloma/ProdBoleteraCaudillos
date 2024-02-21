import { Sequelize } from "sequelize";
import { config } from "../config.js";

console.log(config);

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: 'mysql'
});

console.log(config);
export default db;