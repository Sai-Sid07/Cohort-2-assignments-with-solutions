const {User} = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const userEntity = await User.findOne({username: username})
    if(userEntity == null){
        return res.status(401).send({
            status: 401,
            message: "Username doesn't exist in database."
        })
    }

    if(userEntity.password !== password){
        return res.status(401).send({
            status: 401,
            message: "Password is incorrect."
        })
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