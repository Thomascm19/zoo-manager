const mongoose = require('mongoose');
const { Schema } = mongoose;

const zooSchema = new Schema({
    name: { type: String, required: true },
    nit: { type: String, required: true },
})

module.exports = mongoose.model('Zoo', zooSchema);