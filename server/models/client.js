const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true }
})

module.exports = mongoose.model('Client', clientSchema);