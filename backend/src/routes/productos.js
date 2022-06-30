const express = require('express');
const router = express.Router();
const connection = require('../database.js');

// Crear un producto
router.post('add/produto',  (req, res) => {
    const { precio, marca, gramos, descripcion, uso, administracion, cantidad } = req.body;
    console.log(precio, marca, gramos, descripcion, uso, administracion,cantidad);
    connection.query('INSERT INTO ')
})

module.exports = router;