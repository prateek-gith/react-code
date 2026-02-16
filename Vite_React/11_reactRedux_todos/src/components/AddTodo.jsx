import { useEffect, useState } from "react"
import { addTodo, removeTodo, updateTodo } from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux'


export default function Todo({todoMsg,setTodoMsg}){
    const dispatch = useDispatch()
    const [myValue, setMyValue] = useState("")

    useEffect(()=>{
        if (todoMsg){
            setMyValue(todoMsg.text)
        }
    }, [todoMsg])

    function handleSubmit(e){
        e.preventDefault()

        if(todoMsg){
            dispatch(updateTodo({id:todoMsg.id, text:myValue}))
            setTodoMsg("")
        }else{
            dispatch(addTodo(myValue))
        }

        setMyValue("")

    }


    return (
        <>
            {
                <form onSubmit={handleSubmit}>
                    <input className="bg-black text-amber-50"
                    placeholder="Enter Todo"
                    type="text"  
                     value={myValue}
                     onChange={(e)=>setMyValue(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            }
        </>
    )
}