const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./post')


const profileSchema = new Schema({
    name: {type: String},
    posts: [postSchema],
    comments: [commentSchema]
})

module.exports = mongoose.model('Profile', profileSchema);