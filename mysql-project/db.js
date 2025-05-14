const mysql = require('mysql2');

const connection = mysql.createConnection({ 
host: 'localhost',
user: 'root',
password: '12@@12@@',
database: 'node_mysql_db'
});

connection.connect((err)=>{
    if(err) throw error;
    console.log("Connected to database");
});

module.exports = connection;