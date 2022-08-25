import React, { useState } from "react";
import { buttonStyle, divStyle, inputStyle, formStyle } from "./Styles";
import ToDoList from "./ToDoList";

function MyFormContainer () {
    const initialState = []
    const [todos, setTodos] = useState(initialState)
    const [item, setItem] = useState({value: ''})

    function handleChange(e) {
        e.preventDefault()
        setItem({value: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, {item}])
        setItem({value: ''})
    }

    function handleErrase(e) {
        e.preventDefault()
        setTodos(initialState)
    }

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input type={'text'} style={inputStyle} name='search' value={item.value} onChange={handleChange} />
            <div style={divStyle}>
                <button style={buttonStyle} type='submit'>Enviar</button>
                <button style={buttonStyle} onClick={handleErrase}>Borrar</button>
            </div>
            <div>
                <ToDoList list={todos}/>
            </div>
        </form> 
    )

}

export default MyFormContainer