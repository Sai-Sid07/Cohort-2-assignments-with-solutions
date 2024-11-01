const express = require("express")
const zod = require('zod')

const app = express()
const port = 3000

//Simple validation for array of numbers
const schemaArr = zod.array(zod.number());

//Validating multiple fields at once
const schema = zod.object({
    email: zod.string().email(),
    /*
    refine(async (e) => {
      // Where checkIfEmailIsValid makes a request to the backend
      // to see if the email is valid.
      return await checkIfEmailIsValid(e);
    }, "This email is not in our database")
    Tip - Use this to validate emails to check if the entered email exists in the database
    */
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json())

app.post("/health-checkup", (req, res) => {
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

    // Kidneys = [1,2] is an array
    const kidneys = req.body.kidneys
    const userInput = {
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        kidneys: req.body.kidneys
    }
    const responseArr = schemaArr.safeParse(kidneys)
    const response = schema.safeParse(userInput)
    if(!response.success){
        return res.status(400).send({response: response})
    }
    return res.status(200).send({response: response})


    return res.status(200).send("Healthy input.")
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))