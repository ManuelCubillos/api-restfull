const { Router } = require('express')
const router = Router()

const vendedoresCtrl = require('../controllers/vendedores.controller.js')

router.get('/', vendedoresCtrl.getVendedores)
router.post('/', vendedoresCtrl.createVendedor)
router.get('/:id', vendedoresCtrl.getVendedor)
router.put('/:id', vendedoresCtrl.editVendedor)
router.delete('/:id', vendedoresCtrl.deleteVendedor)

module.exports = router