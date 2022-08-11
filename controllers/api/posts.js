const Post = require('../../models/post');

module.exports = {
    get,
    create,
}

async function get(req, res){
    const posts = await Post.find(req.user.profile);
    res.json(posts);
}

async function create(req, res){
    try {
        const post = new Post(req.body);
        post.save();
    } catch(err){
        res.status(400).json(err);
    }
}