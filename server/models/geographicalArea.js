const mongoose = require('mongoose');
const { Schema } = mongoose;

const geographicalAreaSchema = new Schema({
    name: {type: String, required: true},
    firstEmployee: {type: Schema.ObjectId, ref: "Employee" },
    secondEmployee: { type: Schema.ObjectId, ref: "Employee" },
    thirdEmployee: { type: Schema.ObjectId, ref: "Employee" },
    fourthEmployee: { type: Schema.ObjectId, ref: "Employee" }
})

module.exports = mongoose.model('GeographicalArea', geographicalAreaSchema);