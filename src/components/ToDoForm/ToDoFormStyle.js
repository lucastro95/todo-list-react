import styled from "styled-components";

export const ToDoFormWrapper = styled.div`
height: 50vh;
width: 40%;
margin: 0 1rem;
background-color: #6f5060;
border-radius: 2rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem;
color: #e7ebc5;

@media (max-width: 786px) {
    flex-direction: column;
    width: 80%;
    margin: 0;
    margin-top: 5rem;
    height: auto;
}
`