import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function TodoItems({ text, id, isComplete, deleteTodo,toggle }) {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center'>
            <img onClick={()=>toggle(id)} className='w-6 cursor-pointer' src={isComplete? tick : not_tick} title={isComplete? "Task Done" : "Task Pending"} alt="" />
            <p onClick={()=>toggle(id)}  className={`text-slate-700 ml-4 text-[17px] decoration-slate-800 cursor-pointer ${isComplete? "line-through opacity-70":""}`} title={isComplete? "Task Done" : "Task Pending"}>{text}</p>
        </div>
        <img onClick={()=>deleteTodo(id)} className='w-4 cursor-pointer' src={delete_icon} alt="" />
    </div>
  )
}

export default TodoItems