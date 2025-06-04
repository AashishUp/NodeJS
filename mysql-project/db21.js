require('dotenv').config();
const mysql = requier('mysql2');

const db = mysql.createPool({
   host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'node_relational_db'
});

module.exports = db.promise();