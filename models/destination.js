const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    location: {
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        }
    },
})

module.exports = mongoose.model('Destination', destinationSchema);