const Location = require('../../models/location');

module.exports = {
    get,
    create,
}

async function get(req, res){
    const location = await Location.find();
    res.json(location);
}

async function create(req, res){
    try {
        const location = new Location(req.body);
        location.save();
    } catch(err){
        res.status(400).json(err);
    }
}