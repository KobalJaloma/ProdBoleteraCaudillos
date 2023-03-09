import { Sequelize } from "sequelize";

const db = new Sequelize('boletera','procesos','2xK#iz&Gl715', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;