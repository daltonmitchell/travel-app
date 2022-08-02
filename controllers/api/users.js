const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {
    create,
    createJWT,
    logIn,
    checkToken,
}

async function create(req, res){
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch(err){
        res.status(400).json(err);
    }
}

async function logIn(req, res){
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) throw new Error('Invalid Credentials');
        if(await bcrypt.compare(req.body.password, user.password)){
            const token = createJWT(user);
            res.json(token);
        } else {
            throw new Error('Invalid Credentials');
        }
    } catch(err){
        res.status(400).json(err);
    }
}

function checkToken(req, res){
    console.log('req.user', req.user);
    res.json(req.exp);
}

function createJWT(user){
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}