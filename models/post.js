const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./comment');
const destinationSchema = require('./location');


const postSchema = new Schema({
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    body: {type: String},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }]
})

module.exports = mongoose.model('Post', postSchema);