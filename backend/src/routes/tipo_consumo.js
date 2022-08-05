const router = require ('express').Router();

const {getTipo_consumo,posTipo_consumo,deleteTipo_cosumo,updateTipo_consumo} = require ('../controllers/tipo_consumoController')

router.get('/view/tipo_consumo',getTipo_consumo);
router.post('/create/tipo_consumo',posTipo_consumo);
router.delete('/tipo_consumo/:id',deleteTipo_cosumo);
router.put('/update/tipo_consumo/:id',updateTipo_consumo);

module.exports = router;