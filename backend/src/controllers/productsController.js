const { factory, connection } = require('../factory/quey_factory');
const port = require('../app');

async function getProducts (req, res) {
    let query = `select img_url from productos;`;
    const response = await factory(query);
    res.json({ response });
}

async function getProduct (req, res) {
    const { id } = req.params;
    let query = `SELECT * FROM productos WHERE id = ${id};`;
    const response = await factory(query);
    res.json({ response });
}

async function createImage (req, res) {
    const { file } = req
    if (file) {
        let url = `${('port')}/images/${file.filename}`;
        let query = `INSERT INTO productos(img_url) VALUES (${connection.escape(url)})`;

        const result = await factory(query);
        res.json(result)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createImage
}