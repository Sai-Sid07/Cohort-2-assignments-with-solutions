const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs')
  
  const app = express();

  let lastId = 1;
  
  app.use(bodyParser.json());

  app.get("/todos", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err){
            if (err.code === 'ENOENT') data = '[]';
            else throw err
        } 
        const todos = data.trim() ? JSON.parse(data) : [];
        return res.status(200).json(todos)
    })
  })

  app.get("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err
        const index = req.params.id.toString()
        const todos = data.trim() ? JSON.parse(data) : []
        itemFound = false
        todos.forEach((todo, ind) => {
            if(todo.id == index){
                itemFound = true
                return res.status(200).json(todo)
            }
        })
        if(!itemFound){
            return res.status(404).json("Not Found")
        }
    })
  })

  app.post("/todos", (req, res) => {
    const todoItem = req.body
    const newTodo = {
      id: lastId,
      title: todoItem.title,
      completed: false,
      description: todoItem.description,
    }
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err
        const todos = data.trim() ? JSON.parse(data) : []
        todos.push(newTodo)
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if(err) throw err
            lastId += 1 
            res.status(201).json({"id": newTodo.id})
        })
    })
  })

  app.put("/todos/:id", (req, res) => {
    const index = req.params.id
    const todoItem = req.body
    const todoObj = {
      id: index,
      title: todoItem.title,
      completed: todoItem.completed,
      description: todoItem.description,
    }
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err
        const todos = JSON.parse(data)
        todos.forEach((todo, ind) => {
            if(todo.id == index){
                todos[index] = todoObj
            }
        })
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if(err) throw err
            res.status(200).json({"id": todoObj.id})
        })
    })
  })

  app.delete("/todos/:id", (req, res) => {
    const indexOfTodo = req.params.id
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err
        const todos = data.trim() ? JSON.parse(data) : []
        if(todos.length == 0){
          return res.status(404).json("No data to delete")
        }
        const updatedTodos = todos.filter(element => {
            return indexOfTodo !== element.id.toString()
        })
        if(updatedTodos.length == todos.length){
          return res.status(404).json("Index not found")
        }
        fs.writeFile("todos.json", JSON.stringify(updatedTodos), (err) => {
            if(err) throw err
            return res.status(200).json("Deleted successfully")
        })
    })
  })

  // app.listen(3000, () => {
  //   console.log("Port on 3000")
  // })
  
  module.exports = app;

