const mongoose = require('mongoose');
const { Schema } = mongoose;

const dateSchema = new Schema({    
    vet: {type: Schema.ObjectId, ref: "Vet" },
    animal: { type: Schema.ObjectId, ref: "Animal" },
    description: { type:String, required: false }
})

module.exports = mongoose.model('Date', dateSchema);