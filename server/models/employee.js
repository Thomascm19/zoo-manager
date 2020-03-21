const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},    
})

module.exports = mongoose.model('Employee', employeeSchema);