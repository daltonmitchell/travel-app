const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Location', locationSchema);