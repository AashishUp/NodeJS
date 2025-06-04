const mysql = require('mysql2/promise');

const db= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12@@12@@',
    database: 'node_mysql_db'
});

module.exports = db;