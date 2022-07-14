const express = require('express');
const { query } = require('../database.js');
const router = express.Router();
const connection = require('../database.js');


//trayendo los datos de la tabla
router.get('/agregar/uso', (req, res) => {
    connection.query('SELECT * FROM tipo_consumo', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//trayendo los datos de la tabla
router.get('/home', (req, res) => {
    connection.query('select productos.id, productos.nombre, productos.descripcion, productos.precios, productos.cant_gramos, tipo_consumo.tipo_consumo, tipo_medicamento.tipo_uso from productos,tipo_consumo,tipo_medicamento where tipo_consumo.id=productos.id_tipo_uso and tipo_medicamento.id=id_tipo_uso;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM tipo_consumo WHERE id = ?', [id],
        (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        })
})


// Crear un nuevo uso
router.post('/add/consumo', (req, res) => {
    const { id, tipo_consumo } = req.body;
    console.log(id, tipo_consumo);
    var query = "INSERT INTO tipo_consumo(id, tipo_consumo) values (?, ?);";
    connection.query( query, [id, tipo_consumo], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'tipo de consumo agregado' });
            console.log(`tipo de medicina agregado con exito`);
            console.log(query);
        } else {
            console.log(err);
        }
    });
});


// Editar un nuevo uso
router.put('/edit/:id', (req, res) => {
    const { tipo_consumo, estado } = req.body;
    const { id } = req.params;
    const query = "UPDATE tipo_consumo SET id=?, tipo_consumo=?, estado=? WHERE id LIKE ?;";
    connection.query(query, [id, tipo_consumo, estado, id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: "tipo de medicina actualizado" })
        } else {
            console.log(err);
        }
    });
});


// Eliminar un nuevo uso
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM tipo_consumo WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'tipo de consumo eliminado' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;