const mysql = require('mysql2');
const mysql_data = require('./mysql_data.json');


//connection data
const objectConnection = {
    host: mysql_data.mysql.host,
    user: mysql_data.mysql.user,
    password: mysql_data.mysql.pass,
    database: mysql_data.mysql.database
}

const connection = mysql.createConnection(objectConnection)

module.exports = connection;