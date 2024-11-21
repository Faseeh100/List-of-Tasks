import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Create.css'
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [task, setTask] = useState('');
    const navigate = useNavigate();

    const press = (e) => {
        e.preventDefault();

        if (!task.trim()) {
            alert('Please enter a task before submitting!');
            return;
          }
        axios.post('https://672f7c1b66e42ceaf15dd895.mockapi.io/tasks',{
            task : task
        })
        .then(() =>{
            navigate('/read')
        })
    }


  return (
    <div className='whole'>
        <div className='sett'>
      <h1>Tasks List</h1>
      <Link to='/read'>
      <button className='ch-btn'>Check</button>
      </Link>
      </div>
      <form>
        <div className='sec'>

            <label className='lab'>Add a Task</label>

            <input 
            placeholder='Enter a Task' 
            type="text" className='inp' 
            value={task} 
            onChange={(e) => setTask(e.target.value)} />
            
        </div>
        <button className='sub-btn' onClick={press}>Submit</button>
      </form>
    </div>
  )
}

export default Create
