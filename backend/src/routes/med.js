const express = require('express');
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
    const { id, tipo_consumo, estado } = req.body;
    console.log(id, tipo_consumo, estado);
    connection.query("INSERT INTO tipo_consumo(id, tipo_consumo, estado) values (?, ?, ?);", [id, tipo_consumo, estado], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'tipo de consumo agregado' });
            console.log(`tipo de medicina agregado con exito`);
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