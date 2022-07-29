const router = require('express').Router();


const {getEmpresa, postEmpresa, deleteEmpresa, updateEmpresa} = require ('../controllers/empresaController');



router.get('/view/empresa',getEmpresa);
router.post('/create/empresa',postEmpresa);
router.delete('/delete/empresa/:id',deleteEmpresa);
router.put('/update/empresa/:id',updateEmpresa);

module.exports = router;