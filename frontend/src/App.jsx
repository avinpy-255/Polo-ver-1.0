import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import './App.css'

function App() {
 const todoList = [
  {_id: 1,
   title: "go to gym",
   description: "at 3:30pm" 
  }
 ]

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todoList}></Todos>
    </div>
  )
}

export default App
