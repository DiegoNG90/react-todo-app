import React from 'react';
import './styles.css';
import Form from './Form';

import TodoList from './TodoList'

const App = () => {
    return (
    <div className="container">
        <h1> To-do App </h1> 
        <Form />
        <TodoList />       
    </div>
    )
}

export default App;