import { Sequelize } from "sequelize";

const db = new Sequelize('u591014885_cortesias','u591014885_sistemas','r3Ax8JxL65L&', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

export default db;