const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require('dotenv').config()
const jwtPassword = "123456";
const port = 3000

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/users-collection?retryWrites=true&w=majority`;

mongoose.connect(
    connectionString
  ).then(() => {
    console.log("MongoDB is connected");
  }).catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  // should check in the database
  const existingUser = await User.findOne({username: username})
  if(existingUser != null){
    return true
  }
  return false
}

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const response = await userExists(username, password)

    if (!response) {
        return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // console.log(username + " " + password)
    // console.log("Name: " + name)

    const user = new User({
        name: name,
        username: username,
        password: password
    })

    // console.log("User: " + user)

    try {
        const response = await user.save()
        if(response){
            return res.status(200).send({
                message: "Successfully signed-up!"
            })
        }
    } catch (error) {
        return res.status(400).send({
            message: "Could not save data",
            error: error
        })
    }

})

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))