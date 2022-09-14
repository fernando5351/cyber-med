const express = require("express");
const port = process.env.PORT || 4000;
const multer = require('multer')
const { urlencoded, json } = require("express");
const path = require("path");
const cors = require("cors");
const storage = require('../config/multer')

var session = require('express-session')

// initialization
const app = express();

app.use(session({
    secret: 'webslesson',
    resave: true,
    saveUninitialized: true
  }));

//settings
app.set('port', port);

//middlewares
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(multer({storage}).single('file'))
app.use(json());

//routes
app.use(require('./routes/productos'));
app.use(require('./routes/empresa'));
app.use(require('./routes/tipo_uso'));
app.use(require('./routes/tags'));
app.use(require('./routes/tipo_consumo'));
app.use(require('./routes/login'));


//public files
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app