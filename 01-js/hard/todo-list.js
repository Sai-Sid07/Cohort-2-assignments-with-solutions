/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todos){
    this.todos = []
  }

  add(todo){
    this.todos.push(todo)
  }

  remove(indexOfTodo){
    const item = this.todos[indexOfTodo]
    this.todos = this.todos.filter(element => item !== element)
  }

  update(index, updatedTodo){
    if(index < this.todos.length){
      this.todos[index] = updatedTodo
    }
  }

  getAll(){
    return this.todos
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.todos.length){
      return null
    }
    return this.todos[indexOfTodo]
  }

  clear(){
    const todoLength = this.todos.length;
    for (let index = 0; index < todoLength; index++) {
      this.todos.pop()
    }
  }

}

module.exports = Todo;
