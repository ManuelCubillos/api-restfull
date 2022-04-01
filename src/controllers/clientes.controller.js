const clienteCtrl = {}
const Cliente = require('../models/Cliente')

clienteCtrl.getClientes = async (req, res) => {
    const clientes = await Cliente.find()
    res.json(clientes)
}
clienteCtrl.createCliente = async (req, res) => {
    const newCliente = new Cliente(req.body)
    await newCliente.save() 
    res.send({ message: 'Cliente Created'})
}
clienteCtrl.getCliente = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id)
    res.send(cliente)
}
clienteCtrl.editCliente = async (req, res) => {
    await Cliente.findByIdAndUpdate(req.params.id, req.body )
    res.json({ status:'Cliente Update'})
}
clienteCtrl.deleteCliente = async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id)
    res.json({ status:'Cliente Deleted'})

}

module.exports = clienteCtrl