const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./post')


const profileSchema = new Schema({
    name: {type: String},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }]
})

module.exports = mongoose.model('Profile', profileSchema);