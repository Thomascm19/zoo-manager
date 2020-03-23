const mongoose = require('mongoose');
const { Schema } = mongoose;

const geographicalAreaSchema = new Schema({
    name: {type: String, required: true},
    employee: { type: Schema.ObjectId, ref: "Employee" } 
})

module.exports = mongoose.model('GeographicalArea', geographicalAreaSchema);