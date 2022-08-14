const mysql = require('mysql2');
const mysql_data = require('./mysql_data.json');


//connection data
const objectConnection = {
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB
}

const connection = mysql.createConnection(objectConnection)

module.exports = connection;