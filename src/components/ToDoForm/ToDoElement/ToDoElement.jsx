import { ToDoElementWrapper } from "./ToDoElementStyle"

const ToDoElement = ({data, deleteData}) => {
    return(
    <ToDoElementWrapper>
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
        <button onClick={() => deleteData(data.id)}>Borrar</button>
    </ToDoElementWrapper>
    )
}

export default ToDoElement