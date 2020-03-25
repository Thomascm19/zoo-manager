const mongoose = require('mongoose');
const { Schema } = mongoose;

const zooSchema = new Schema({
    name: { type: String, required: true },
    nit: { type: String, required: true },
    geographicalArea: { type: Schema.ObjectId, ref: "GeographicalArea" }
})

module.exports = mongoose.model('Zoo', zooSchema);