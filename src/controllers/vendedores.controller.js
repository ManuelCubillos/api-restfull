const vendedorCtrl = {}
const Vendedor = require('../models/Vendedor')

vendedorCtrl.getVendedores = async (req, res) => {
    const vendedores = await Vendedor.find()
    res.json(vendedores)
}
vendedorCtrl.createVendedor = async (req, res) => {
    const newVendedor = new Vendedor(req.body)
    await newVendedor.save()

    res.send({ message: 'Vendedor Created'})
}
vendedorCtrl.getVendedor = async (req, res) => {
    const vendedor = await Vendedor.findById(req.params.id)
    res.send(vendedor)
}
vendedorCtrl.editVendedor = async (req, res) => {
    await Vendedor.findByIdAndUpdate(req.params.id, req.body )
    res.json({ status:'Vendedor Update'})
}
vendedorCtrl.deleteVendedor = async (req, res) => {
    await Vendedor.findByIdAndDelete(req.params.id)
    res.json({ status:'Vendedor Deleted'})

}

module.exports = vendedorCtrl