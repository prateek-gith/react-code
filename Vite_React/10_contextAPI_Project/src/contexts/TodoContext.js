import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            todoId : 1,
            todoTitle : 'My First Title',
            isComplete : false
        }
    ],

    addTodos : (todoTitle)=>{},
    updateTodo : (todoId, todoTitle)=>{},
    removeTodo : (todoId)=>{},
    toggleTodo : (todoId)=>{}

})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}