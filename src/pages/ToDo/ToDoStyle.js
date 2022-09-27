import styled from "styled-components";

export const ToDoWrapper = styled.div`
width: 100%;
height: calc(100vh - 80px);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

@media (max-width: 786px) {
    flex-direction: column;
}
`