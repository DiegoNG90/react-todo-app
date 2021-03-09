import React from 'react';



const Form = ({inputValue,setInputValue,todoItems,setTodoItems}) => {
    // const enterHandler = (e) => {
    //     e.preventDefault();
    //     const $form = document.querySelector(".form-group")

    //     $form.addEventListener("keyup", (e)=> {
    //         if(e.keyCode === 13){
    //             e.preventDefault();
    //             document.querySelector('.icon').click();
    //         }
    //     })
    // }
    

    const onInputChange = (e) => {
        const $input = document.querySelector(".input-field")
        e.preventDefault();
        if($input.value){
            $input.style.fontStyle = "normal";
        }else{
            $input.style.fontStyle = "italic"; 
        }
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
            >
                <div className="input-icon">
                <i 
                    className="far fa-plus-square icon"
                    onClick={submitTodo}
                >
                </i>
                <input 
                    className="form-control input-field" 
                    type="text" placeholder="Ingresa una tarea"
                    value={inputValue}
                    onInput={onInputChange}
                    
                />
                </div>
            </form>
        </div>
    )
}

export default Form;
