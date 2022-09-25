import ToDoElement from "../ToDoElement/ToDoElement";
import { ToDoListWrapper } from "./ToDoListStyle";

const ToDoList = ({ data, deleteData }) => {
  return (
    <ToDoListWrapper>
      <h3 style={{ color: "#51344d" }}>Lista de Tareas</h3>
      {data.length === 0 ? (
        <h3 style={{ marginTop: "2rem", color: "#6f5060" }}>No hay tareas</h3>
      ) : (
        data.map((el) => <ToDoElement key={el.id} data={el} deleteData={deleteData} />)
      )}
    </ToDoListWrapper>
  );
};

export default ToDoList;
