const mongoose = require("mongoose")
require('dotenv').config()

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/todo-app?retryWrites=true&w=majority`;
mongoose.connect(
    connectionString
).then(() => {
    console.log("MongoDB is connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("todos", TodoSchema)

module.exports = {
    Todo
}