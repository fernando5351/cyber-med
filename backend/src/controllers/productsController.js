const { factory, connection } = require('../factory/quey_factory');
const port = `http://localhost:4000`;

async function getProducts (req, res) {
    const { nombre } = req.body;
    console.log(nombre);
    let query = `SELECT id, nombre, precios, marca, cant_gramos FROM productos WHERE nombre LIKE "${nombre}%";`;
    const form1 = await factory(query);

    let query2 = `SELECT productos.descripcion, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_medicamento, tipo_consumo WHERE productos.nombre LIKE "${nombre}%" && productos.id_tipo_uso LIKE tipo_medicamento.id &&  productos.id_tipo_consumo LIKE tipo_consumo.id;`;
    const form2 = await factory(query2);

    let query3 = `SELECT img_url FROM productos WHERE nombre LIKE "${nombre}%"`;
    const getImg = await factory(query3);

    res.json({ img: getImg, formFirst: form1, formSecond: form2 });
    console.log(query);
    console.log(query2);
}

async function postProduct (req, res){
    const { file } = req;
    if (file) {
        let url = `${port}/images/${file.filename}`;
        let postImg = `INSERT INTO productos(img_url) VALUES (${connection.escape(url)})`
        const img = await factory(postImg);

        res.json({status: img});
    }
}

async function createImage (req, res) {
    const { file } = req
    if (file) {
        let url = `${port}/images/${file.filename}`;
        let query = `INSERT INTO productos(img_url) VALUES (${connection.escape(url)})`;
        const result = await factory(query);
        
        res.json(result)
    }
}

module.exports = {
    getProducts,
    postProduct,
    createImage
}