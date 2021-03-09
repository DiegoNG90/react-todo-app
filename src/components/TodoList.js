import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({todoItems}) => {
    let renderedTasks = todoItems.map((item) => {
        return <TodoItem key={item.id} task={item.text}> </TodoItem>
    })
  
    return (
        <div>
           {renderedTasks}
        </div>
    )
}

export default TodoList;