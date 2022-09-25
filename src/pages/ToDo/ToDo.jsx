import { useState } from "react"
import ToDoForm from "../../components/ToDoForm/ToDoForm"
import ToDoList from "../../components/ToDoForm/ToDoList/ToDoList"
import { ToDoWrapper } from "./ToDoStyle"
import swal from 'sweetalert'

const Home = () => {
    const [db, setDb] = useState([])

    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data])
    }

    const deleteData = (id) => {
        swal({
            title: "¿Estás seguro de eliminar esta tarea?",
            icon: "warning",
            buttons: ['No', 'Si'],
          }).then(respuesta => {
              if (respuesta) {
                  let newData = db.filter(el => el.id !== id)
                  setDb(newData)
              } else {
                  return
              }
          })

    }

    return (
        <ToDoWrapper>
            <ToDoForm createData={createData} />
            <ToDoList data={db} deleteData={deleteData}/>
        </ToDoWrapper>
    )
}

export default Home