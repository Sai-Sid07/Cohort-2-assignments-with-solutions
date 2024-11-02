const {User} = require("../db/index");
const jwt = require('jsonwebtoken');
require('dotenv').config()

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1]

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        const userEntity = await User.findOne({username: verify.username})
        if(userEntity == null){
            return res.status(401).send({
                status: 401,
                message: "Username doesn't exist in database."
            })
        }

        if(userEntity.password !== verify.password){
            return res.status(401).send({
                status: 401,
                message: "Password is incorrect."
            })
        }
        res.locals.username = verify.username
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
    next()
}

async function userExistsMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username: username, password: password})
    if(user != null){
        return res.status(409).send({
            message: "Username already exists"
        })
    }
    next()
}

module.exports = {
    userMiddleware,
    userExistsMiddleware
};