import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const[todos, setTodods]=useState([])


  const addTodos =(todoObj)=>{

    setTodods((prev)=>[...prev, {todoId : Date.now(), ...todoObj }])
  }

  const updateTodo = (todo_id, todoObj)=>{
    setTodods((prev)=> prev.map((currTodo)=> (currTodo.todoId === todo_id ? todoObj:currTodo)))
  }

  const removeTodo = (todo_id) => {
    setTodods((prev)=> prev.filter((currTodo)=> currTodo.todoId !== todo_id))
  }

  const toggleTodo = (todo_id) => {
    setTodods((prev)=> prev.map((currTodo)=> currTodo.todoId===todo_id ? {...currTodo, isComplete : !currTodo.isComplete}  : currTodo))
  }

  useEffect(()=>{
    const myTodosLocal = JSON.parse(localStorage.getItem("myTodos"))
    if (myTodosLocal && myTodosLocal.length>0){
      setTodods(myTodosLocal)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("myTodos", JSON.stringify(todos))

  }, [todos])



  return (
    <TodoContextProvider value={{todos,addTodos, updateTodo,removeTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((currentTodo)=>(
              <div key={currentTodo.todoId} >
                <TodoItem todo={currentTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
