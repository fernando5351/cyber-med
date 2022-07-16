const express = require('express');
const router = express.Router();
const connection = require('../database.js');


router.get('/view/:id',(req,res)=>{
    const { id } = req.params;
    connection.query('SELECT  * FROM tipo_medicamento WHERE id=?', [id],
    (err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});



router.post('/add/tipo_uso', (req,res)=>{
    const  {id, tipo_uso} = req.body;
    console.log(id, tipo_uso);
    connection.query('INSERT INTO tipo_medicamento(id,tipo_uso)values(?,?);', [id, tipo_uso], (err,rows,fields)=>{
        if (!err) {
            res.json({ status: 'tipo de consumo agregado' });
            console.log(`tipo de medicina agregado con exito`);
        } else {
            console.log(err);
        }
    });
});

router.put('/update/tipo_uso/:id', (req, res) => {
    const { tipo_uso} = req.body;
    const { id } = req.params;
    const query = "UPDATE tipo_medicamento SET id=?, tipo_uso=?  WHERE id LIKE ?;";
    connection.query(query, [id, tipo_uso,id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: "tipo de medicina actualizado" })
        } else {
            console.log(err);
        }
    });
});

router.delete('/delete/tipo_uso/:id',(req,res)=>{
    const {id} = req.params;
    connection.query('DELETE  FROM tipo_medicamento WHERE id = ?', [id],(err,rows,fields)=>{
        if (!err) {
            res.json({status: "tipo de uso eliminado"});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;