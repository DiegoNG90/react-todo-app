import React from 'react';

const TodoItem = ({task}) =>{
    // console.log(todoItems);
    return (
        <div className="todo-item d-flex justify-content-between">
            <p>{task}</p>
            <div className="todo-item-btn d-flex justify-content-end align-items-start">
                <button className="complete-btn"><i className="fas fa-check"></i></button>
                <button className="delete-btn"><i className="fas fa-trash"> </i></button>
            </div>
        </div>
    )
}

export default TodoItem;
