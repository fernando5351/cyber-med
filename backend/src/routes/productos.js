const { Router } = require("express");
const express = require("express");
const router = express.Router();
const connection = require("../database.js");

router.post("/create/products/f1", (req, res) => {
  const { precios, marca, cant_gramos } = req.body;
  console.log(precios, marca, cant_gramos);
  connection.query(
    "INSERT INTO productos(precios, marca, cant_gramos) VALUES ( ?, ?, ? )",
    [precios, marca, cant_gramos],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "datos agrgados con exito" });
        console.log("datos agregado con exito");
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/create/products/f2", (req, res) => {
  const { descripcion, cantidad_medicamento, id_tipo_consumo, id_tipo_uso } =
    req.body;
  console.log(descripcion, cantidad_medicamento, id_tipo_consumo, id_tipo_uso);
  let query = "INSERT INTO productos(descripcion, cantidad_medicamento, id_tipo_consumo, id_tipo_uso) Values ( ?, ?, ? ,? );";
  connection.query(
    query,
    [descripcion, cantidad_medicamento, id_tipo_consumo, id_tipo_uso],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "dato guardado con exito" });
        console.log(`dato agregado con exito`);
        console.log(query);
      } else {
        console.log(err);
      }
    }
  );
});

router.post('/create/form/f3', (req, res) => {
  const { img } = req.body;
  console.log(img);
  let query = `INSERT INTO productos( img ) VALUES (?);`;
  connection.query( query, [ img ], (err, rows, fields) => {
    if (!err) {
      res.json({status: "Imagen agregada con exito"});
      console.log(query);
    } else {
      console.log(query);
    };
  });
})



router.get("/view/products/f1", (req, res) => {
  const { nombre } = req.body;
  console.log(nombre);
  var query = `SELECT productos.descripcion, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_consumo, tipo_medicamento WHERE productos.nombre LIKE "${nombre}${'%'}" && tipo_medicamento.id LIKE productos.id_tipo_uso && tipo_consumo.id LIKE productos.id_tipo_consumo;`;
  connection.query(
    query,
    [nombre],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
        console.log(query);
      } else {
        console.log(err);
      }
    }
  );
});

router.get('/view/products/f2', (req, res) => {
  const { nombre } = req.body;
  console.log(nombre);
  var query = `SELECT nombre, precios, marca, cant_gramos FROM productos WHERE nombre like "${nombre}${'%'}";`;
  connection.query( query ,(err, rows, fields) => {
    if(!err){
      res.json(rows);
      console.log(query)
    } else {
      console.log(err);
    }
  })
})

router.put('/edit/products/form1', (req, res) => {
  const { nombre } = req.body;
  console.log(nombre);
  let query = `"${nombre}${'%'}"`;
})

module.exports = router;