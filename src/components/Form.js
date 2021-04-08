import React from 'react';



const Form = ({inputValue,setInputValue,todoItems,setTodoItems}) => {

    const onInputChange = (e) => {
        e.preventDefault();
        setInputValue( e.target.value)
        // console.log(e.target.value);
    }
    const submitTodo = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, {text: inputValue, completed: false, id: Math.random()*1000}]);
        setInputValue('');
        
        
    }

    return (
        <div>
            <form 
                className="form-group"
                // onSubmit={enterHandler}
                onSubmit={(e)=> submitTodo(e)}
            >
                <div className="input-icon">
                <button
                    className="add"
                    type="submit">
                    <i className="far fa-plus-square icon"></i>
                </button>
                <input 
                    className="form-control input-field"  
                    type="text" placeholder="Ingresa una tarea"
                    value={inputValue}
                    onChange={(e) =>onInputChange(e)}
                    style={inputValue.length? {fontStyle: "normal"}: {fontStyle: "italic"}}
                    
                />
                </div>
            </form>
        </div>
    )
}

export default Form;
