const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    category: {type: String, required: true},
    weight: {type: String, required: true},
    height: {type: String, required: true}

})

module.exports = mongoose.model('Animal', animalSchema);