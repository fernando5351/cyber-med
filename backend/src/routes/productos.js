const express = require('express');
const router = express.Router();


const { getProducts, postProduct, delProducts, putProducts } = require('../controllers/productsController')

router.get('/view/products/:id', getProducts);
router.post('/products', postProduct);
router.put('/products/:id', putProducts)
router.delete('/products/:id', delProducts);

module.exports = router