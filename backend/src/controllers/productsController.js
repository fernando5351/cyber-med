const { factory, connection } = require("../factory/quey_factory");
const path = require("path");
const fs = require("fs");
let cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_key_secret
});

async function getProductsid(req, res) {
  const { id } = req.params;
  console.log(id);
  let query = `SELECT productos.id, productos.nombre, productos.precios, productos.marca, productos.cant_gramos FROM productos WHERE id LIKE ${id};`;
  const form1 = await factory(query);

  //let query = `SELECT productos.id, productos.descripcion, productos.img_url, productos.nombre, productos.precios, productos.marca, productos.cant_gramos, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_medicamento, tipo_consumo WHERE productos.id_tipo_uso LIKE tipo_medicamento.id &&  productos.id_tipo_consumo LIKE tipo_consumo.id;`;

  let query2 = `SELECT productos.descripcion, tipo_medicamento.tipo_uso, tipo_consumo.tipo_consumo, productos.cantidad_medicamento FROM productos, tipo_medicamento, tipo_consumo WHERE productos.id LIKE ${id} && productos.id_tipo_uso LIKE tipo_medicamento.id &&  productos.id_tipo_consumo LIKE tipo_consumo.id;`;
  const form2 = await factory(query2);

  let query3 = `SELECT productos.img_url FROM productos WHERE id LIKE ${id}`;
  const getImg = await factory(query3);

  res.json({ img: getImg, formFirst: form1, formSecond: form2 });
  console.log(query);
  console.log(query2);
}

async function getProducts(req,res){
  let query = 'select productos.id, productos.nombre, productos.descripcion, productos.precios, productos.cant_gramos, tipo_consumo.tipo_consumo, tipo_medicamento.tipo_uso from productos,tipo_consumo,tipo_medicamento where tipo_consumo.id=productos.id_tipo_consumo and tipo_medicamento.id=id_tipo_uso;';
  const data = await factory(query);
  
  const object = data;
  res.json(object);
  console.log(object);
  
}

async function postProduct (req, res) {
  const { descripcion, id_tipo_consumo, id_tipo_uso, cantidad_medicamento, nombre, precios, marca, cant_gramos } = req.body

  //subiendo imagenes a cloudinary
  const response = cloudinary.v2.uploader.upload(req.file.path)
  console.log(( await response))
  console.log((await response).public_id);
  //obtener la direccion y el id de la imagen en cloudinary
  let route = (await response).url;
  let name_img = (await response).public_id;
  let query = `INSERT INTO productos(img_url, name_img, descripcion, id_tipo_uso, id_tipo_consumo, cantidad_medicamento,nombre, precios, marca, cant_gramos) VALUES (${connection.escape(route)}, "${name_img}", "${descripcion}", ${id_tipo_uso}, ${id_tipo_consumo}, ${cantidad_medicamento},"${nombre}", ${precios},"${marca}",${cant_gramos})`;
  const postData = await factory(query);

  res.json({ getData: postData });

  //obtener el nombre de la imagen para removerla del server
  const img = req.file.filename;
  console.log(` el nombre de la imagen es: ${img}`)

  //ruta donde se hubica la imagen
  let router = path.join(__dirname, `../../public/images/${img}`);

  //eliminamos la imagen por el metodo file system                                                                                                                        
  try {
    await fs.unlinkSync(router);                                                                                                
    console.log(` file removed ${router}`);                                                                     
    //file removed
  } catch (err) {
    console.error(err);
  }
}

async function putProducts ( req, res ) {
  const { id } = req.params;
  const { descripcion, id_tipo_consumo, id_tipo_uso, cantidad_medicamento, nombre, precios, marca, cant_gramos, id_lote } = req.body

  //obtener el nombre de la imagen para luego borrarla de cloudinary
  let sql = `SELECT name_img FROM productos WHERE id LIKE ${id}`
  const data = await factory(sql);

  const dataRes = data

  console.log(dataRes[0].name_img)  
  const name_image = dataRes[0].name_img
  
  //subiendo imagenes a cloudinary
  const response = cloudinary.v2.uploader.upload(req.file.path);
  console.log(( await response));
  console.log((await response).public_id);
  //obtener la direccion y el id de la imagen en cloudinary
  let route = (await response).url;
  let name_img = (await response).public_id;
  let query = `UPDATE productos SET nombre="${nombre}", descripcion="${descripcion}", id_tipo_uso="${id_tipo_uso}", id_tipo_consumo="${id_tipo_consumo}", cant_gramos="${cant_gramos}", marca="${marca}", precios="${precios}", id_lote="${id_lote}", img_url="${route}", cantidad_medicamento="${cantidad_medicamento}", name_img="${name_img}" WHERE id LIKE ${id}`;
  const getdata = await factory(query);

  res.json(getdata)

  const del = await cloudinary.v2.uploader.destroy(name_image);
  console.log(del);

  //obtener el nombre de la imagen para removerla del server
  const img = req.file.filename;
  console.log(` el nombre de la imagen es: ${img}`)

  //ruta donde se hubica la imagen
  let router = path.join(__dirname, `../../public/images/${img}`);

  //eliminamos la imagen por el metodo file system                                                                                                                        
  try {
    await fs.unlinkSync(router);                                                                                                
    console.log(` file removed ${router}`);                                                                     
    //file removed
  } catch (err) {
    console.error(err);
  }
}

async function delProducts(req, res) {
  const { id } = req.params;

  //obtener el nombre de la imagen
  let getData = `SELECT name_img FROM productos WHERE id LIKE ${id}`;
  const data = await factory(getData);

  const dataRes = data

  //eliminamos el registro
  let sql = `DELETE FROM productos WHERE id LIKE ${id}`;
  const response = await factory(sql)

  res.json(response)

  console.log(dataRes[0].name_img)  
  const name_img = dataRes[0].name_img
  const result = await cloudinary.uploader.destroy(name_img)
  console.log(result)
}


module.exports = {
  getProducts,
  getProductsid,
  postProduct,
  putProducts,
  delProducts
 };