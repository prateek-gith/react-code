import { removeTodo,updateTodo } from "../features/todo/todoSlice"
import { useSelector, useDispatch } from 'react-redux'


export default function Todo({setTodoMsg}){
    // const myTodos = useSelector((state) => state.todos)
    const myTodos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        <ul>
        {
            myTodos.map((currTodo)=>(
                <li key={currTodo.id}>
                <span type="text" 
                className="bg-amber-300 text-amber-50"
                >{currTodo.text} </span>
                <button onClick={()=>dispatch(removeTodo(currTodo.id))}>❌</button>
                <button onClick={()=>setTodoMsg(currTodo)} >☑️</button>
            </li>
            ))
        }
        </ul>
        
        </>
    )
}