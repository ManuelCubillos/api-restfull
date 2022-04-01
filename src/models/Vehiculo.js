const { Schema, model } = require("mongoose")

const vehiculoSchema = new Schema(
    {
        marca: {type: String, required: true},
        referencia: {type: String, required: true},
        color: {type: String, required: true},
        precio: {type: Number, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
        
    }
)

module.exports = model("Vehiculo", vehiculoSchema )