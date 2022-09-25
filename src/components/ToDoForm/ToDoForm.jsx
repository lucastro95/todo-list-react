import { useState } from "react"
import ToDoFormInput from "./ToDoFormInput/ToDoFormInput"
import { ToDoFormWrapper } from "./ToDoFormStyle"
import swal from 'sweetalert'

const initialForm = {
    title: '',
    description: '',
    id: null
}

const ToDoForm = ({createData}) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
  
        if(!form.title || !form.description) {
            swal({
                title: "¡Se deben rellenar todos los campos!",
                icon: "error",
              });
          return
        } 
  
        if (form.id === null) {
          createData(form)
        }
        
        handleReset()
      }

    const handleReset = (e) => {
        setForm(initialForm)
    }
    
    return (
        <ToDoFormWrapper onSubmit={handleSubmit}>
            <img src={require('./ToDoFormImg/form-img.png')} alt={'Bulbasaur writing'} style={{width:'40%', filter:'drop-shadow(10px 8px 4px #51344d)'}}/>
            <ToDoFormInput handleChange={handleChange} form={form}/>
        </ToDoFormWrapper>
    )
}

export default ToDoForm