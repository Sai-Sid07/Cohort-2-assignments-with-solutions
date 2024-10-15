const express = require("express")

const app = express()

app.get("/health-checkup", (req, res) => {
    //This validation code would repeat across endpoints. This violates DRY (Do-Not Repeat Yourself)
    /*
    const kidneyId = req.query.kidneyId
    const userName = req.headers.userName
    const password = req.headers.password

    if(userName != "Sai Sidharth" || password != "password"){
        return res.status(403).json({
            message: "User doesn't exist"
        })
    }

    if(kidneyId > 2 || kidneyId < 1){
        return res.status(411).json({
            message: "Invalid input"
        })
    }
    */

    return res.status(200).send("Healthy input.")
})