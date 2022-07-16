const router = require('express').Router();

const storage = require('../../config/multer')
const multer = require('multer')
const upload = multer({storage})

const { getProducts, getProduct, createImage } = require('../controllers/productsController')

router.get('/view/products', getProducts);
router.get('/view/products/:id', getProduct);
router.post('/create/img', upload.single('file'), createImage);

module.exports = router