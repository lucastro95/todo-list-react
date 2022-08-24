import React, { useState } from "react";
import styled from "styled-components";
import MyButton from "./Button";
import { divStyle, inputStyle } from "./Styles";
import ToDoList from "./ToDoList";

function MyFormContainer () {
    const initialState = []
    const [todos, setTodos] = useState(initialState)
    const [item, setItem] = useState({value: ''})

    function handleChange(e) {
        setItem({value: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, {item}])
    }

    const FormContainer = styled.form`
    margin: auto;
    margin-top: 3em;
    width: 40%;
    height: auto;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: blueviolet;
    border-radius: .5em;
    `

    return (
        <FormContainer onSubmit={handleSubmit}>
            <input type={'text'} style={inputStyle} name='search' value={item.value} onChange={handleChange} />
            <p>{item.value}</p>
            <div style={divStyle}>
                <MyButton message="Añadir" type='submit' />
                <MyButton message="Borrar"/>
            </div>
            <div>
                <ToDoList list={todos}/>
            </div>
        </FormContainer> 
    )

}

export default MyFormContainer