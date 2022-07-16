const express = require('express');
const router = express.Router();
const connection = require('../database.js');


router.get('/table/empresas', (req,res)=>{
    connection.query('SELECT  empresa.id , empresa.nombre_empresa, empresa.direccion, empresa.telefono, empresa.email,empresa.lote,empresa.activo, productos.nombre from empresa,productos where productos.id=empresa.id_producto',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
          
        }else{
            console.log(err);
        }
    });
});

router.post('/create/empresa',(req,res)=>{
    const {nombre_empresa,id_producto,direccion,telefono,email,lote,activo}=
    req.body;
    console.log(nombre_empresa,id_producto,direccion,telefono,email,lote,activo);
    let query = "INSERT INTO empresa(nombre_empresa,id_producto,direccion,telefono,email,lote,activo) values (?,?,?,?,?,?,?)";
    connection.query(query,[nombre_empresa,id_producto,direccion,telefono,email,lote,activo],
      (err,rows,fields)=>{
        if (!err) {
          res.json({statu: "dato guardado con exito"});
        }else {
            console.log(err)
        }
      }
      
    );
});

router.put('/update/empresa/:id',(req,res)=>{
    const {nombre_empresa,id_producto,direccion,telefono,email,lote,activo} = req.body;
    const {id} = req.params;
    console.log(id, nombre_empresa,id_producto,direccion,telefono,email,lote,activo)
    const query = `UPDATE empresa SET id=${id} , nombre_empresa=${nombre_empresa}, id_producto=${id_producto} , direccion=${direccion} , telefono=${telefono} , email=${email} , lote=${lote} , activo=${activo} WHERE id LIKE ${id};`;
    connection.query(query,[id,nombre_empresa,id_producto,direccion,telefono,email,lote,activo,id],(err,rows,fields)=>{
        if (!err){
            res.json({ status:"empresas actualizadas" })
        }else{
            console.log(err);
        }
    });
});

router.delete('/delete/empresa/:id',(req,res)=>{
    const {id} = req.params;
    connection.query('DELETE FROM empresa WHERE id=?',[id],(err,rows,field)=>{
      if (!err) {
        res.json({status:"empresa eliminada"});
      }else{
        console.log(err);
      }
    });
});

module.exports = router;
// SELECT  empresa.id, empresa.nombre_empresa, empresa.direccion, empresa.email,empresa.telefono, empresa.lote,empresa.activo, productos.nombre FROM empresa,productos WHERE productos.id=empresa.id_producto;