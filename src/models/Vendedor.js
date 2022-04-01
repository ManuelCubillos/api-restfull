const { Schema, model } = require("mongoose")

const vendedorSchema = new Schema(
    {
        nombre: {type: String, required: true },
        apellido: {type: String, required: true},
        telefono: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model("Vendedor", vendedorSchema )