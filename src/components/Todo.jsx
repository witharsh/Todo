import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

function Todo() {

    const inputRef =useRef();
    const [todoList, settodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) :[]);

    const add=async()=>{
        const inputText = inputRef.current.value.trim();

        if (inputText==="") {
            return null;
        }
        
        const newTodo ={
            id: Date.now(),
            text: inputText,
            isComplete : false
        };
        settodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value="";
    }

    const deleteTodo=(id)=>{
        settodoList((prvTodos)=>{
           return prvTodos.filter((todo)=>todo.id !== id);
        })
    }

    const toggle=(id)=>{
        settodoList((prvTodos)=>{
            return prvTodos.map((todo)=>{
                if (todo.id===id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
         })
    }

    useEffect(() => {

      localStorage.setItem("todos", JSON.stringify(todoList))

    }, [todoList])
    

  return (
    <div className='bg-white place-self-center w-full sm:w-11/12 sm:max-w-md flex flex-col p-7  sm:h-[auto] sm:min-h-[550px] h-full sm:rounded-xl'>

        {/* -----------------Title--------------- */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* -----------------Input-Box--------------- */}
        <div className='flex items-center w-full my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-24 sm:w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>

        {/* -----------------Todo-List--------------- */}
        {todoList.map((item,index)=>{
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        })}
    </div>
  )
}

export default Todo