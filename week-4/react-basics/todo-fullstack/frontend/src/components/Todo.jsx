export function Todo (props) {
    return (
      <div>
        <h2>Title: {props.title}</h2>
        <p>Description: {props.description}</p>
        <button>{props.completed ? "Completed" : "Mark as complete"}</button>
      </div>
    )
} 

// async function markAsComplete(id){
//     const response = await fetch(`http://localhost:3000/todo/${id}`, {
//         method: "PUT"
//     })

// }