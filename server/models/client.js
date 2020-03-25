const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    edad: { type: Number, required: true },
    numDocumento: { type: String, required: true },
    correo: { type: String, required: true }
})

module.exports = mongoose.model('Client', clientSchema);