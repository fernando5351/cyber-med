const express = require("express");
const router = express.Router();

const { getTags, getProducts } = require('../controllers/tagsController')

router.get('/view/tags-products', getTags);
router.get('/view/img/:id', getProducts);

module.exports = router;