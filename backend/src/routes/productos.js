const express = require('express');
const router = express.Router();

//requerimientos para las imagenes
const storage = require('../../config/multer')
const multer = require('multer')
const port = `http://localhost:4000`;
const upload = multer({storage});

const { getProducts, postProduct, delProducts, alumnos } = require('../controllers/productsController')

router.get('/view/products/:id', getProducts);
router.post('/products', postProduct);
router.post('/alumnos', alumnos);
router.delete('/delete/products/:id', upload.single('file'), delProducts);

module.exports = router