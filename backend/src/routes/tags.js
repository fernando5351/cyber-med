const express = require('express');
const router = express.Router();

const { getTags } = require('../controllers/tagsController')

router.get('/view/tags-prodcuts', getTags);

module.exports = router