const express = require('express');
const router = express.Router();

//requerimientos para las imagenes
const storage = require('../../config/multer')
const multer = require('multer')
const upload = multer({storage})

const { getProducts, getProductsid, postProduct, editProducts, delProducts } = require('../controllers/productsController')

router.get('/view/products/:id', getProductsid);
router.get('/view/products',getProducts);
router.post('/create/products', upload.single('file'), postProduct);
router.put('/edit/productos/:id', upload.single('file'), editProducts);
router.delete('/delete/products/:id', delProducts);

module.exports = router