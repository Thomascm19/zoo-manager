const mongoose = require('mongoose');
const { Schema } = mongoose;

const packegeSchema = new Schema({
    name: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    client: { type: Schema.ObjectId, ref: "Client" }
})

module.exports = mongoose.model('Packege', packegeSchema);