import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";


function MainPage() {
    const [todos, setTodos] = useState([]);
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((result) => {
                setTodos(result.data);
            })
    }, []);

    const deleteList = (idToRemove) => {
        const updatedData = todos.filter(item => item.id !== idToRemove);
        setTodos(updatedData);
    };

    const handleCheck = (id) => {
        // console.log(id);
        const listItems = todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item)
        setTodos(listItems);
    }
    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
    };
    return (
        <div className='container'>
            <h1 className='text-dark bg-warning rounded-3 text-uppercase p-2 mt-3 mb-3'>Task List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Task</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.slice(0, visibleItems).map((list, i) => (
                            <tr key={i}>
                                <th>{list.id}</th>
                                <td style={(list.completed) ? { textDecoration: 'line-through', color: 'red' } : null} > {list.title}</td>
                                <td><input style={{ width: '20px', height: '20px', cursor: 'pointer' }} type="checkbox" onChange={() => handleCheck(list.id)} checked={list.completed} ></input></td>
                                <td><button className='btn' onClick={() => deleteList(list.id)}><i class="fa-solid fa-trash fa-lg" style={{ color: '#fa0000' }}></i></button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {visibleItems < todos.length && (
                <button className='btn btn-primary' onClick={loadMore}>Load More <i class="fa-solid fa-spinner fa-spin" style={{color: '#ffff'}}></i></button>
            )}
        </div>
    )
}

export default MainPage