const mysql = require('mysql2')

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'josue',
    password: 'Josue-17@19',
    database: 'db_medicines'
})

connection.connect( function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('database is connnected');
    }
})

module.exports = connection;