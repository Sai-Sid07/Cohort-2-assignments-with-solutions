const express = require('express')
const app = express()
const cors = require("cors");

const zodValidation = require("./types")
const mongoModel = require("./db")
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
/*  
    {
        title: string,
        description: string
    }

*/

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.get("/todos", async (req, res) => {
    //logic to get all todos
    try {
        const todos = await mongoModel.Todo.find()
        
        return res.status(200).send({
            todos: todos
        })
    } catch (error) {
        return res.status(400).send({
            message: "Error occured",
            error: error
        })
    }
    
})

app.post("/todo", async (req, res) => {
    //logic to save todo
    const todo = req.body
    const validateTodo = zodValidation.createTodo.safeParse(todo)
    if(!validateTodo.success){
        return res.status(411).send({
            message: "Bad Input",
            error: validateTodo.error
        })
    }
    const todoEntry = new mongoModel.Todo({
        title: todo.title,
        description: todo.description,
        completed: false
    })

    try {
        await todoEntry.save()
        return res.status(200).send({
            message: "Entry saved successfully."
        })
    } catch (error) {
        return res.status(400).send({
            message: "Error occured",
            error: error
        })
        
    }
})

app.put("/todo/:id", async(req, res) => {
    //logic to update todo to completed
    const id = req.params.id
    try {
        await mongoModel.Todo.updateOne({_id: id}, {completed: true})
        return res.status(200).send({
            message: "Entry updated successfully."
        })
    } catch (error) {
        return res.status(400).send({
            message: "Error occured",
            error: error
        })
        
    }
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))