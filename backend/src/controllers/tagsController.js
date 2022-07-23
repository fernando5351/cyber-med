const { factory } = require('../factory/quey_factory');

async function getTags (req, res) {
    let quey = `SELECT * FROM tipo_consumo`;
    const getTags = await factory(quey);

    res.json({ status: getTags })
}

module.exports = {
    getTags
}