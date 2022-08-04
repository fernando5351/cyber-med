const express = require('express');
const router = express.Router();


const { getProducts, postProduct, delProducts } = require('../controllers/productsController')

router.get('/view/products/:id', getProducts);
router.post('/products', postProduct);
router.delete('/products/:id', delProducts);

module.exports = router