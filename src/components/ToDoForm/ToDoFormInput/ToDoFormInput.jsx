import { ToDoFormInputWrapper } from "./ToDoFormInputStyle"

const ToDoFormInput = ({handleChange, form}) => {
    return (
        <ToDoFormInputWrapper>
            <h3>Agrega tu poketarea</h3>
            <input type={'text'} name={'title'} placeholder={'Título'} onChange={handleChange} value={form.title}></input>
            <input type={'textarea'} name={'description'} placeholder={'Descripción'} onChange={handleChange} value={form.description}></input>
            <input type={'submit'} value={'Enviar'}/>
        </ToDoFormInputWrapper>
    )
}

export default ToDoFormInput