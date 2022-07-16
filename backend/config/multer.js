const multer = require('multer')
const path = require('path');

// recibe image
const storage = multer.diskStorage({
    destination: function(req, file, img) {
        img(null, path.join(__dirname, '../public/images'))
    },
    filename: function(req, file, name) {
        name(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
        // image/jpg
    }
})

module.exports = storage