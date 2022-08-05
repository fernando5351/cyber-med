const router = require ('express').Router();

const {getTipo_usoid, getTipo_uso }=require('../controllers/tipo_usoController');
const {postTipo_uso} = require ('../controllers/tipo_usoController');
const {updateTipo_uso}= require('../controllers/tipo_usoController');
const {deleteTipo_uso} = require ('../controllers/tipo_usoController.js');

router.get('/view/tipo_uso/:id',getTipo_usoid);
router.get ('/view/tipo_uso/',getTipo_uso);
router.post('/tipo_uso',postTipo_uso);
router.put ('/update/tipo_uso/:id',updateTipo_uso);
router.delete('/tipo_uso/:id',deleteTipo_uso);
module.exports = router;