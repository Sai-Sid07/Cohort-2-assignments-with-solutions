const {Admin} = require("../db/index");
const jwt = require('jsonwebtoken');
require('dotenv').config()

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1]
    
    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        const userEntity = await Admin.findOne({username: verify.username})
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
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }

    next()
}

module.exports = adminMiddleware;