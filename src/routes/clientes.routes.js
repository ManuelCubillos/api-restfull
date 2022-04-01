const { Router } = require('express')
const router = Router()

const clientesCtrl = require('../controllers/clientes.controller.js')

router.get('/', clientesCtrl.getClientes)
router.post('/', clientesCtrl.createCliente)
router.get('/:id', clientesCtrl.getCliente)
router.put('/:id', clientesCtrl.editCliente)
router.delete('/:id', clientesCtrl.deleteCliente)

module.exports = router