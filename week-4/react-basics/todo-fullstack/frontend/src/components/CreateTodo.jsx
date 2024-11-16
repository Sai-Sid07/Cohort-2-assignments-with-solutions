import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")    

    return(
        <div>
            <input style={{padding: 10, margin: 10}} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" placeholder="Enter Title" /> <br/>
            <input style={{padding: 10, margin: 10}} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" placeholder="Enter Description" /> <br/>

            <button style={{padding: 5, margin: 10}} onClick={() => addTodo({title: title, description: description})} >Add a todo</button>
        </div>
    )
}

async function addTodo(props){
    console.log(props.title)
    const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
            title: props.title,
            description: props.description
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    alert(data)

}