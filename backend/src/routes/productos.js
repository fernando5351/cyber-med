const express = require('express');
const router = express.Router();


const { getProductsid, getProducts, postProduct, delProducts, putProducts } = require('../controllers/productsController')

router.get('/view/products/:id', getProductsid);
router.get('/view/products',getProducts)
router.post('/products', postProduct);
router.put('/products/:id', putProducts)
router.delete('/products/:id', delProducts);

module.exports = router