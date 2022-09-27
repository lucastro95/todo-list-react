import styled from "styled-components";

export const ToDoListWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 786px) {
    width: 80%;
    margin-top: 2rem;
}

`