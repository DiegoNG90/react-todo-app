import React from 'react';

const TodoItem = ({task,item,todoItems, setTodoItems}) =>{
    //Delete TodoItem
    const deleteHandler = () => {
        setTodoItems(todoItems.filter((element) => element.id !== item.id));
        // console.log(item);
    }
    const completedHandler = () => {
        setTodoItems(todoItems.map((element) => {
            if(element.id === item.id){
                return {
                    ...element,completed: !item.completed
                }
            }
            return element;
        }))
    }
    return (
        <div className="todo-item d-flex justify-content-between">
            <p className={`${item.completed ? "completed": ""}`} >{task}</p>
            <div className="todo-item-btn d-flex justify-content-end align-items-start">
                <button 
                    className="complete-btn"
                    onClick={completedHandler}
                >
                       <i className="fas fa-check"></i>
                
                </button>
                <button 
                    className="delete-btn"
                    onClick={deleteHandler}
                >
                        <i className="fas fa-trash"> </i></button>
            </div>
        </div>
    )
}

export default TodoItem;
