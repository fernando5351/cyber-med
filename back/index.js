const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())

const credenciales = ({
    host: "localhost",
    user: "josue",
    password: "Josue-17@19",
    database: "db_medicines"
});

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

app.get('/productos', (req, res) => {
    var connection = mysql.createConnection(credenciales)
    // En esta linea establecemos la conexion de la tabla productos, de la tabla tipo consumo, y de la tabla tipo medicamentos para que se muestten en el home 
    connection.query('select productos.id, productos.nombre, productos.descripcion, productos.precios, productos.cant_gramos, tipo_consumo.tipo_consumo, tipo_medicamento.tipo_uso from productos,tipo_consumo,tipo_medicamento where tipo_consumo.id=productos.id_tipo_uso and tipo_medicamento.id=id_tipo_uso;', (error, resultado) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(resultado)
        }
    })
    connection.end()
})
app.get("/agregar/medicinas", (req, res) => {
    const tipouso = req.body.tipo_uso
    const estado  = req.body.estado
    const sqlInsert = "INSERT INTO tipo_consumo(tipo_consumo, estado) VALUES (?, ?);";
    credenciales.query(sqlInsert, [tipo_uso, estado], (err, restult) => {

    })
  });

  app.get('/empresa',(req,res)=>{
    var connection = mysql.createConnection(credenciales)
    // En esta linea establecemos la conexion de la tabla productos, de la tabla tipo consumo, y de la tabla tipo medicamentos para que se muestten en el home 
    connection.query('SELECT  empresa.id, empresa.nombre_empresa, empresa.direccion, empresa.email,empresa.telefono, empresa.lote,empresa.activo, productos.nombre FROM empresa,productos WHERE productos.id=empresa.id_producto;', (error, resultado)=>{
        if (error) {
            res.status(500).send(error)
        }else{
            res.status(200).send(resultado)
        }
    })
    connection.end()
})

app.post('/eliminar/medicinas', (res, req) => {
    const { id } = req.body
    var connection = mysql.createConnection(credenciales)
    connection.query('DELETE FROM tipo_consumo WHERE id = ? ', id, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({ "status": "success", "message": "Tipo de uso elminado correctamente" })
        }
    })
    connection.end()
})

app.post ('super-usuario',(res,req)=>{
    var connection = mysql.createConnection(credenciales)
    connection.query("SELECT * FROM  super-usuario WHERE nombres = ? AND codigo = ? " )
})

    





app.listen(4000, () => {
    console.log('this is a servidor')
})
