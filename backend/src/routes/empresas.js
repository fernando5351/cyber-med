const express = require('express');
const router = express.Router();
const connection = require('../database.js');

router.get('/table/empresas/view', (req, res) => {
    connection.query('SELECT * FROM empresa', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;