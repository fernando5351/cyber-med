const express = require('express')
const cors = require('cors')
const mysql  = require('mysql2')
const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())

const credenciales = {
    host: "localhost",
    user: "schiffer",
    password: "Fernando-19@20",
    database: "db_medicines"
}

app.get('/medicinas', (req, res) => {
    var connection = mysql.createConnection(credenciales)
    connection.query('SELECT * from tipo_consumo', (error, resultado) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(resultado)
        }
    })
    connection.end()
})

app.get('/home/table', (req, res) => {
    var connection = mysql.createConnection(credenciales)
    connection.query('SELECT id.productos, nombre.productos, precios.productos, cant_gramos.productos, tipo_consumo.tipo_consumo, tipo_uso.tipo_medicamento from tipo_consumo, tipo_medicamento, tipo_consumo where id_tipo_consumo.productos LIKE id.tipo_consumo && id_tipo_uso.productos LIKE id.tipo_uso', (error, resultado) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(resultado)
        }
    })
    connection.end()
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    const values = [ email, password]
    var conexion = mysql.createConnection(credenciales)
    conexion.query('SELECT * FROM admin WHERE correo = ? AND contrasennia LIKE ?', values, (err, result) =>{
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                res.status(200).send(result[0])
            } else {
                res.status(400).send('Usuario no existe')
            }
        }
    })
    conexion.end
})

app.listen(4000, ()=> console.log('this is a servidor'))