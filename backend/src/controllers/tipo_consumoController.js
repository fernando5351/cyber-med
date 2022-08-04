const {factory,connection} = require('../factory/quey_factory');
const por = require ('../app');

async function getTipo_consumo (req,res){
    let query = 'SELECT * FROM tipo_consumo';
    const getTipo_consumo = await factory(query);
    res.json({response});

    const object = getTipo_consumo
    res.json(object);
    console.log(object);
}

async function posTipo_consumo (req,res){
    const {body} = req;
    let query = `INSERT INTO tipo_consumo (tipo_consumo) VALUES (${connection.escape(body.tipo_consumo)})`;
    const response = await factory(query);
    console.log(query);
    res.json({response});
}


async function deleteTipo_cosumo(req,res){
    const {id} = req.params;
    let query = `DELETE  FROM tipo_consumo WHERE id=${id}`;
    const response = await factory(query);
    console.log(query);
    res.json({response});
}

async function updateTipo_consumo(req,res){
    const {id} = req.params;
    const  {tipo_consumo} = req.body;
    let query = `UPDATE tipo_consumo SET id=${id}, tipo_consumo="${tipo_consumo}" WHERE id=${id}`;
    const response = await factory(query);
    console.log(query);
    res.json({response});
}
module.exports = {
    getTipo_consumo,
    posTipo_consumo,
    deleteTipo_cosumo,
    updateTipo_consumo
}

