const {factory,connection} = require ('../factory/quey_factory.js');
const por = require ('../app');

async function getTipo_usoid (req,res){
    const {id} = req.params;
    let query = `SELECT * FROM tipo_medicamento WHERE id LIKE ${id}`;
    const response = await factory(query);
    res.json({response});
}
async function getTipo_uso (req,res){
    let query = 'SELECT * FROM tipo_medicamento';
    const response = await factory(query);
    res.json({response});
}

async function postTipo_uso (req,res){
    const {body} = req;
    let query = `INSERT INTO tipo_medicamento (tipo_uso) VALUES (${connection.escape(body.tipo_uso)})`;
    const response = await factory(query);
    console.log(query)
    res.json({response});
}

async function updateTipo_uso (req,res){
    const {tipo_uso} = req.body;
    const {id} = req.params;
    let query = `UPDATE tipo_medicamento SET id=${id},tipo_uso ="${tipo_uso}" WHERE id LIKE ${id}`;
    const response = await factory(query); 
    console.log(query); 
    res.json({response});
} 

async function deleteTipo_uso (req,res){
    const {id} = req.params;
    let query = `DELETE  FROM tipo_medicamento WHERE id=${id}`;
    const response = await factory(query);
    console.log(query);
    res.json({response});
}

module.exports = {
    getTipo_usoid,
    getTipo_uso,
    postTipo_uso,
    updateTipo_uso,
    deleteTipo_uso
}