const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());

const credenciales = {
<<<<<<< HEAD
  host: "localhost",
  user: "schiffer",
  password: "Fernando-19@20",
  database: "db_medicines",
};

app.get("/medicinas", (req, res) => {
  var connection = mysql.createConnection(credenciales);
  connection.query("SELECT * from tipo_consumo", (error, resultado) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(resultado);
    }
  });
  connection.end();
});

app.get("/empresa", (req, res) => {
  var connection = mysql.createConnection(credenciales);
  // En esta linea establecemos la conexion de la tabla productos, de la tabla tipo consumo, y de la tabla tipo medicamentos para que se muestten en el home
  connection.query(
    "SELECT  empresa.id, empresa.nombre_empresa, empresa.direccion, empresa.email,empresa.telefono, empresa.lote,empresa.activo, productos.nombre FROM empresa,productos WHERE productos.id=empresa.id_producto;",
    (error, resultado) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(resultado);
      }
    }
  );
  connection.end();
});
=======
    host: "localhost",
<<<<<<< HEAD
<<<<<<< HEAD
    user: "Xoxo503",
    password: "Hernandez503jr",
=======
    user: "schiffer",
    password: "Fernando-19@20",
>>>>>>> parent of 037a39c (conexion a bases de datos a vista home)
=======
    user: "schiffer",
    password: "Fernando-19@20",
>>>>>>> parent of 037a39c (conexion a bases de datos a vista home)
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 2ebbc68 (se conrcto la base de datos con la  tabla de la vista empresa)

// app.post('/login', (req, res) => {
//     const { email, password } = req.body
//     const values = [ email, password]
//     var conexion = mysql.createConnection(credenciales)
//     conexion.query('SELECT * FROM admin WHERE correo = ? AND contrasennia LIKE ?', values, (err, result) =>{
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             if (result.length > 0) {
//                 res.status(200).send(result[0])
//             } else {
//                 res.status(400).send('Usuario no existe')
//             }
//         }
//     })
//     conexion.end
// })

app.listen(4000, () => console.log("this is a servidor"));
=======
app.listen(4000, ()=> console.log('this is a servidor'))
>>>>>>> parent of 037a39c (conexion a bases de datos a vista home)
=======
app.listen(4000, ()=> console.log('this is a servidor'))
>>>>>>> parent of 037a39c (conexion a bases de datos a vista home)
