const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./comment');
const destinationSchema = require('./destination');


const postSchema = new Schema({
    destination: { type: Schema.Types.ObjectId, ref: 'Destination' },
    body: {type: String},
    comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema);