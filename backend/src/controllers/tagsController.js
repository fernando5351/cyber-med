const { factory } = require('../factory/quey_factory');

async function getTags (req, res) {
    let quey = `SELECT * FROM tipo_consumo`;
    const getTags = await factory(quey);

    res.json({ status: getTags })
}

async function getProducts (req, res) {
    const { id } = req.params;
    let quey = `SELECT img_url FROM productos WHERE id LIKE ${id}`;
    let response = await factory(quey);

    res.json({response})

    var variable = response;

    console.log(variable)

    let url = variable[0].img_url.split('/');

    console.log(url)

    let dir = url[4];

    console.log(dir)
}

module.exports = {
    getTags,
    getProducts
}