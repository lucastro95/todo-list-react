import React from "react";
import styled from 'styled-components'

const MyButton = (props) => {
    const Btn = styled.button`
    margin: 2em 0;
    padding: 1em 2em;
    border: none;
    background-color: #FFF;
    border-radius: .5em;

    &:hover {
        background-color: gray;
    }
    `

return (
    <Btn>{props.message}</Btn>
)
}

export default MyButton