import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Update.css';
import axios from 'axios';

const Update = () => {

    const [task, setTask] = useState('');
    const [id, setId] = useState('');
    const mv = useNavigate();


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setTask(localStorage.getItem('task'))
    })

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`https://672f7c1b66e42ceaf15dd895.mockapi.io/tasks/${id}`,{
            task : task
        })
        .then(() => {
            mv('/read')
        })
    }

  return (
    <div className='whole'>
      <div className='sett'>
        <h1>Update Form</h1>
        <Link to='/read'>
        <button className='b-btn'>Back</button>
        </Link>
      </div>
      <form>
        <div className='sec'>
            <label className='lab'>Add a Task</label>

            <input 
            className='inp' 
            type='text' 
            value={task} 
            onChange={(e) => setTask(e.target.value)} />

            
        </div>
        <button className='upd-btn' onClick={handleupdate}>Update</button>
      </form>
    </div>
  )
}

export default Update
