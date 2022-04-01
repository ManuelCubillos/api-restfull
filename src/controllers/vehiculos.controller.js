const vehiculoCtrl = {}
const Vehiculo = require('../models/Vehiculo')

vehiculoCtrl.getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculo.find()
    res.json(vehiculos)
}
vehiculoCtrl.createVehiculo = async (req, res) => {
    const newVehiculo = new Vehiculo(req.body)
    await newVehiculo.save() 
    res.send({ message: 'Vehiculo Created'})
}
vehiculoCtrl.getVehiculo = async (req, res) => {
    const vehiculo = await Vehiculo.findById(req.params.id)
    res.send(vehiculo)
}
vehiculoCtrl.editVehiculo = async (req, res) => {
    await Vehiculo.findByIdAndUpdate(req.params.id, req.body )
    res.json({ status:'Vehiculo Update'})
}
vehiculoCtrl.deleteVehiculo = async (req, res) => {
    await Vehiculo.findByIdAndDelete(req.params.id)
    res.json({ status:'Vehiculo Deleted'})

}

module.exports = vehiculoCtrl