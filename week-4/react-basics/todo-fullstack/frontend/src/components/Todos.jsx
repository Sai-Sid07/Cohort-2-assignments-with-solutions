import { useState } from "react";
import { Todo } from "./Todo";

export function Todos() {
    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/todos")
        const data = await response.json()
        alert(data)
        setTodos(data)
    }

    // fetchData()


    return (
        <div>
            {todos.length != 0 && todos.map((todo) => {
                return <Todo title={todo.title} description={todo.description} completed={todo.completed} />
            })}
        </div>
    )
}


