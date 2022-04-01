const { Router } = require('express')
const router = Router()

const vehiculosCtrl = require('../controllers/vehiculos.controller.js')

router.get('/', vehiculosCtrl.getVehiculos)
router.post('/', vehiculosCtrl.createVehiculo)
router.get('/:id', vehiculosCtrl.getVehiculo)
router.put('/:id', vehiculosCtrl.editVehiculo)
router.delete('/:id', vehiculosCtrl.deleteVehiculo)

module.exports = router

