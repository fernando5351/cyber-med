const router = require('express').Router();

//requerimientos para las imagenes
const storage = require('../../config/multer')
const multer = require('multer')
const upload = multer({storage})

const { getProducts, postProduct, createImage } = require('../controllers/productsController')

router.get('/view/products', getProducts);
router.get('/create/products', upload.single('file'), postProduct);
router.post('/crear', upload.single('file'), createImage);

module.exports = router