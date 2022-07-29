const { factory, connection } = require('../factory/quey_factory');
const path = require('path');
const fs = require('fs')
const port = `http://localhost:4000`;
const por = require ('../app');

async function getProductsid (req, res) {
    const { id } = req.params;
    console.log(id);
    let query = `SELECT productos.id, productos.nombre, productos.precios, productos.marca, productos.cant_gramos FROM productos WHERE id LIKE ${id};`;
    const form1 = await factory(query);

    //let query = `SELECT productos.id, productos.descripcion, productos.img_url, productos.nombre, productos.precios, productos.marca, productos.cant_gramos, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_medicamento, tipo_consumo WHERE productos.id_tipo_uso LIKE tipo_medicamento.id &&  productos.id_tipo_consumo LIKE tipo_consumo.id;`;

    let query2 = `SELECT productos.descripcion, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_medicamento, tipo_consumo WHERE productos.id LIKE ${id} && productos.id_tipo_uso LIKE tipo_medicamento.id &&  productos.id_tipo_consumo LIKE tipo_consumo.id;`;
    const form2 = await factory(query2);

    let query3 = `SELECT productos.img_url FROM productos WHERE id LIKE ${id}`;
    const getImg = await factory(query3);

    // res.json({ img: getImg, formFirst: form1, formSecond: form2 });
    // console.log(query);
    // console.log(query2);

  
}

async function getProducts (req,res){
    let query = "select productos.id, productos.nombre, productos.descripcion, productos.precios, productos.cant_gramos, tipo_consumo.tipo_consumo, tipo_medicamento.tipo_uso from productos,tipo_consumo,tipo_medicamento where tipo_consumo.id=productos.id_tipo_uso and tipo_medicamento.id=id_tipo_uso;";
    const table = await factory(query);
    console.log(query);

    const object = table;
    res.json(object);
    console.log(object);
}

async function postProduct (req, res){
    const { file, body } = req;
    //console.log(file, body, nombre, precios, marca, cant_gramos, descripcion, id_tipo_uso, id_tipo_consumo, cantidad_medicamento);
    if ( file ) {
        let url = `${port}/images/${file.filename}`
        let query = `INSERT INTO productos(img_url,descripcion, id_tipo_uso, id_tipo_consumo, cantidad_medicamento,nombre, precios, marca, cant_gramos) VALUES (${connection.escape(url)},${connection.escape(body.descripcion)}, ${connection.escape(body.id_tipo_uso)}, ${connection.escape(body.id_tipo_consumo)}, ${connection.escape(body.cantidad_medicamento)},${connection.escape(body.nombre)}, ${connection.escape(body.precios)},${connection.escape(body.marca)},${connection.escape(body.cant_gramos)})`;
        const postData = await factory(query); 

        res.json({ getData: postData });
        console.log(query);
    }
}

async function editProducts (req, res) {
    const { file, body } = req;
    const { id } = req.params;
    console.log(id)
        let url = `${port}/images/${file.filename}`;
        let query = `UPDATE productos SET nombre=${connection.escape(body.nombre)}, descripcion=${connection.escape(body.descripcion)}, id_tipo_uso=${connection.escape(body.id_tipo_uso)}, id_tipo_consumo=${connection.escape(body.id_tipo_consumo)}, cant_gramos=${connection.escape(body.cant_gramos)}, marca=${connection.escape(body.marca)}, precios=${connection.escape(body.precios)}, id_lote=${connection.escape(body.id_lote)}, img_url=${connection.escape(url)}, cantidad_medicamento=${connection.escape(body.cantidad_medicamento)} where id = ${parseInt(id)};`;
        const updateData = await factory(query);

        console.log(query)
        res.json({ status: updateData})
}

async function delProducts (req, res) {
    const { id } = req.params;

    //query para obtener el nombre de la imagen
    let query = `SELECT img_url FROM productos WHERE id LIKE ${id}`;
    const response = await factory(query)

    //guardamos en una variable el valor de el json
    var variable = response;

    //desestructuramos lo que obtenemos del json
    let url = variable[0].img_url.split('/');

    //obtenemos el nombre de la img
    let dir = url[4];

    //eliminamos el registro
    let sql = `DELETE FROM productos WHERE id LIKE ${id}`;
    const delData = await factory(sql);

    res.json({delData });
    console.log(sql)

    //ruta donde se hubica la imagen
    let route = path.join(__dirname, `../../public/images/${dir}`)

    //eliminamos la imagen por el metodo file system
    try {
        console.log(response)
        fs.unlinkSync(route)
        console.log(` file removed ${dir}`)
        //file removed
      } catch(err) {
        console.error(err)
      }
}

module.exports = {
    getProductsid,
    getProducts,
    postProduct,
    editProducts,
    delProducts
}