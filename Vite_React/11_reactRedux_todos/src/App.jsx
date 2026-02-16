import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { useSelector, useDispatch } from 'react-redux'



function App() {

  const [todoMsg, setTodoMsg] = useState("")
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  return (
    <>
    {/* {todoMsg} */}
      <AddTodo todoMsg = {todoMsg} setTodoMsg={setTodoMsg} />
      <Todo setTodoMsg = {setTodoMsg} />
    </>
  )
}

export default App
