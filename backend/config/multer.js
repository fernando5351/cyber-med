const multer = require('multer')
const path = require('path');

// recibe image
const storage =  multer.diskStorage({
    destination: function(req, file, img) {
        img(null, path.join(__dirname, '../public/images'))
    },
    filename: function(req, file, name) {
        name(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
        // image/jpg
    },
    fileFilter: function(req, res, cb) {
        const filetype = jpg | jpeg | png | tif | tiff | bmp | eps;
        const mimetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true)
        } else {
            cb("error: el archivo debe ser una imagen valida")
        }
    }
})

module.exports = storage