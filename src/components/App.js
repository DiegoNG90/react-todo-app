import React, {useState} from 'react';
import './styles.css';
import Form from './Form';
import TodoList from './TodoList';
// import TodoList from './TodoList';

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    return (
    <div className="container">
        <h1> To-do App </h1> 
        <Form 
            setInputValue={setInputValue}
            inputValue={inputValue}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
        />
        
        <TodoList
            todoItems={todoItems}
            setTodoItems={setTodoItems}
        />
    </div>
    )
}

export default App;