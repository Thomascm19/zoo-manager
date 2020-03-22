const mongoose = require('mongoose');
const URI = 'mongodb+srv://user:password@cluster0-ynhlq.azure.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology : true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;