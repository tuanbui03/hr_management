require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || '3306',
    database: process.env.MYSQL_HR_DB_NAME || 'hr_management',
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '12345678',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false,
    },
});

module.exports = sequelize;
