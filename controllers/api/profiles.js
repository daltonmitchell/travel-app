const Profile = require('../../models/profile')

module.exports = {
    create,
}

async function create(req, res){
    try {
        const profile = await Profile.create(req.body);
    } catch(err){
        res.status(400).json(err);
    }
}