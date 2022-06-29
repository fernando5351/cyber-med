const express = require('express');
const router = express.Router();
const connection = require('../database.js');

router.get('/', (req, res) => {
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

router.post('/add', (req, res) => {
    const { id, tipo_consumo, estado } = req.body;
    const query = "INSERT INTO tipo_consumo(tipo_consumo, estado) values (?, ?);";
    connection.query(query, [id, tipo_consumo, estado], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'tipo de consumo agregado' });
            console.log("eliminado con exito", { id });
        } else {
            console.log(err);
        }
    })
})

router.put('/edit/:id', (req, res) => {
    const { tipo_consumo, estado } = req.body;
    const { id } = req.params;
    const query = "UPDATE tipo_consumo SET tipo_consumo=?, estado=? WHERE id LIKE ?;";
    connection.query(query, [id, tipo_consumo, estado], (err, rows, fields) => {
        if (!err) {
            res.json({ status: "tipo de medicina eliminado" })
        } else {
            console.log(err);
        }
    });
});

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