import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Read.css';



const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://672f7c1b66e42ceaf15dd895.mockapi.io/tasks')
        .then((res) => {
            setData(res.data)
        })
    }


    const setlocal = (id, task) => {
        localStorage.setItem('id', id)
        localStorage.setItem('task', task)
    }

    const setdelete = (id) => {
        axios.delete(`https://672f7c1b66e42ceaf15dd895.mockapi.io/tasks/${id}`)
        .then(() => {
            getData();
        })
    }

    useEffect(() => {
        getData();
    }, [])


  return (
    <div className='comp'>
        <div className='sett'>
      <h1>List of Tasks</h1>
      <Link to='/'>
      <button className='add-btn'>Add a Task</button>
      </Link>
      </div>
      
        <table className='tab'>
            <thead className='head'>
                <tr>
                    <th>#</th>
                    <th>Tasks</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {
            data.map((b) => {
                return (
                <>
                <tbody className='dt'>
                    <tr>
                        <th>{b.id}</th>
                        <td>{b.task}</td>
                        <td>
                            <Link to='/update'>
                            <button className='ed-btn' onClick={() => setlocal(b.id, b.task)}>Edit</button>
                            </Link></td>
                            
                        <td><button className='del-btn' onClick={() => setdelete(b.id)}>Delete</button></td>
                    </tr>
                </tbody>
                </>
            )}
        )}
        </table>           
      

    </div>
  )
}

export default Read
