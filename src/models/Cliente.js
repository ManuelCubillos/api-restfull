const { Schema, model } = require("mongoose")

const clienteSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        email: {type: String, required: true},
        direccion: {type: String, required: true},
        telefono: {type: Number, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
        
    }
)

module.exports = model("Cliente", clienteSchema )