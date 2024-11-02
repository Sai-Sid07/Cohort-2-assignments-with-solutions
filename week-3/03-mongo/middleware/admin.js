const {Admin} = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const userEntity = await Admin.findOne({username: username})
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

module.exports = adminMiddleware;