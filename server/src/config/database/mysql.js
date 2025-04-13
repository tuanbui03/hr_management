const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || '3306',
    user: 'root',
    database: 'mysql',
    password: '12345678'
});

module.exports = connection;
