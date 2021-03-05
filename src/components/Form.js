import React,{useState, useEffect} from 'react';

const Form = () => {
    const[task, setTask] = useState('');

    const onInputChange = (e) => {
        e.preventDefault();
        const $inputValue = document.querySelector(".input-field")
        if($inputValue.value.length>0){
            $inputValue.style.fontStyle = "normal";
        }else{
            $inputValue.style.fontStyle = "italic"; 
        }
        setTask( e.target.value );
    }
    useEffect(()=> {

    })
    return (
        <div className="container">
            <form className="form-group">
                <div className="input-icon">
                <i className="far fa-plus-square icon"></i>
                <input 
                    className="form-control input-field" 
                    type="text" placeholder="Ingresa una tarea"
                    value={task}
                    onInput={onInputChange}
                />
                </div>
            </form>
        </div>
    )
}

export default Form;
