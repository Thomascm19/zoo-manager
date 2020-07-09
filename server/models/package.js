const mongoose = require('mongoose');
const { Schema } = mongoose;

const packageSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    client: { type: Schema.ObjectId, ref: "Client" }    
})

module.exports = mongoose.model('Package', packageSchema);