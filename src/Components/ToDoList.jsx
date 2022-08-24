import React from 'react'

export default function ToDoList({list}) {
  return (
    <div>
        {list.length === 0 ? 'No hay tareas' : showList(list)}
        {/* {console.log(list)} */}
    </div>
  )
}

function showList(list) {
    list.map((el, index) => (
        <h2 key={index}>Tarea: {el.item.value}</h2>
    ))
}
