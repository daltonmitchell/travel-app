const Profile = require('../../models/profile');
const User = require('../../models/user');

module.exports = {
    create,
    get,
}

async function create(req, res){
    try {
        const profile = new Profile(req.body);
        profile.user = req.user._id;
        profile.save();
    } catch(err){
        res.status(400).json(err);
    }
}

async function get(req, res){
    const profile = await Profile.findOne({user: req.user._id}).populate({
        path: 'posts',
            populate: {
                path: 'location'
            }
    });
    res.json(profile)
}