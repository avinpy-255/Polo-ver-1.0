import { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

import './App.css'

function App() {
const [todosList, setTodos] = useState([]);

fetch("http://localhost:3001/todos")
.then(async function(res){
  const json = await res.json();
  setTodos(json.Todos);
})
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todosList}></Todos>
    </div>
  )
}

export default App
