const Post = require('../../models/post');
const Profile = require('../../models/profile');

module.exports = {
    get,
    create,
    getOne,
    update,
    delete: deletePost,
}

async function get(req, res){
    try{
        const profile = await Profile.findOne({user: req.user._id})
        .populate({
            path: 'posts',
            populate: {
                path: 'location'
            }
        })
        const posts = profile.posts
        console.log(posts)
        res.json(posts);
    } catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

async function getOne(req, res){
    try{
        console.log(req.params.id);
        const post = await Post.findById(req.params.id).populate('location');
        res.json(post)
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

async function create(req, res){
    try {
        const post = new Post(req.body);
        post.save();
        Profile.findOne({user: req.user._id}, function(err, profile){
            profile.posts.push(post._id);
            profile.save();
        }) 
    } catch(err){
        res.status(400).json(err);
    }
}

async function update(req, res){
    try {
        console.log(req.body)
        const post = await Post.findByIdAndUpdate(req.params.id, {"body" : req.body.body, "location" : req.body.location});
        post.save();
    } catch(err){
        res.status(400).json(err);
    }
}

async function deletePost(req, res){
    try {
        const profile = await Profile.findOne({user: req.user._id})
        const idx = profile.posts.indexOf(req.params.id);
        profile.posts.splice(idx, 1);
        profile.save();
        let post = await Post.findByIdAndDelete(req.params.id);
    } catch(err){
        res.status(400).json(err);
    }
}