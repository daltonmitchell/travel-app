const Post = require('../../models/post');
const Profile = require('../../models/profile');

module.exports = {
    get,
    create,
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
        // .exec(function (err, doc){
        //     console.log(doc)
        // });
        const posts = profile.posts
        console.log(posts)
        res.json(posts);
    } catch(err){
        console.log(err)
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