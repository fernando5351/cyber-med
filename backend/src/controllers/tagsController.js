const { factory } = require("../factory/quey_factory");

async function getTags(req, res) {
  let quey = `SELECT * FROM tipo_consumo`;
  const getTags = await factory(quey);

  const object = getTags
  res.json(object);
  console.log(object);
}

module.exports = {
  getTags
};
