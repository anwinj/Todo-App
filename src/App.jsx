import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './Redux/TodoSlice'

function App() {

  const [bgColor,setBgColor] = useState('#FFFFFF')
  const [todoTask,setTodoTask] = useState('')
  const dispatch = useDispatch()
  const allTodos = useSelector(state=>state.todoReducer)
  // console.log(allTodos);
  // console.log(todoTask);
  const handleChange = event => {
    if (event.target.checked) {
      setBgColor('#AFE1AF')
    }
    else {
      setBgColor('#FFFFFF')
    }
  };

  
  return (
    <>
      <div className='container m-4'>
        <h1>My Todo List</h1>

        <div className='mt-4 d-flex align-items-center'>
          <input onChange={e=>setTodoTask(e.target.value)} type="text" className='rounded' placeholder=' Add Todo...'/>
          <button onClick={()=>dispatch(addTodo(todoTask))} className='btn btn-primary ms-3'>Submit</button>
        </div>

        {
          allTodos?.length>0?allTodos.map((todo)=>(
            <div className=' border rounded p-3 mt-3 d-flex justify-content-between align-items-center' style={{backgroundColor:`${bgColor}`}}>
            <div className='d-flex'>
              <input type="checkbox" onChange={handleChange} name="" id="" />
              <p className='mt-2 ms-3 fs-5'>{todo}</p>
            </div>
            <button className='btn btn-danger' onClick={()=>dispatch(removeTodo(todo))} >Delete</button>
          </div>
          ))
           
          :<h1>No task</h1>
        }

      </div>
      
    </>
  )
}

export default App
