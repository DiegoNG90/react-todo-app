import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({todoItems,setTodoItems}) => {
    let renderedTasks = todoItems.map((item) => {
        return <TodoItem key={item.id} task={item.text} setTodoItems={setTodoItems} todoItems={todoItems} item={item}> </TodoItem>
    })
  
    return (
        <div>
           {renderedTasks}
        </div>
    )
}

export default TodoList;