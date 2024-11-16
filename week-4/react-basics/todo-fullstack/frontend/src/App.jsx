import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  return (
    <div>
      <CreateTodo />
      <Todos />
    </div>
  )
}

export default App
