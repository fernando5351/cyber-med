const express = require("express");
const port = process.env.PORT || 4000;
const { urlencoded, json } = require("express");
const path = require("path");
const cors = require("cors"); 

// initialization
const app = express();

//settings
app.set('port', port);

//middlewares
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

//routes
app.use(require('./routes/productos'));
app.use(require('./routes/empresa'));
app.use(require('./routes/tipo_uso'));
app.use(require('./routes/tags'));
app.use(require('./routes/tipo_consumo'));


//public files
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app