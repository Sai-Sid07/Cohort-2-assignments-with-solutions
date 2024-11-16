import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(
    [
      {
        title: "Do Harkirat",
        description: "Cohort 2.0 on a daily basis",
        completed: "false"
      },
      {
        title: "Do GRE",
        description: "gregMat",
        completed: "false"
      },
      {
        title: "Prepare lunch",
        description: "Cook everyday",
        completed: "false"
      }
    ]
  )

  return (
    <div>
      {
        todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description} completed={todo.completed} />
        })
      }

    </div>
  )
}

const Todo = (props) => {

  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Description: {props.description}</p>
      <p>Completed?: {props.completed}</p>
    </div>
  )

} 

export default App
