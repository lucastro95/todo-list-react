import React from 'react'
import { liStyle, ulStyle } from './Styles'

export default function ToDoList({list}) {
  return (
    <ul style={ulStyle}>
        {list.length === 0 ? <li style={liStyle}>No hay tareas</li> : list.map((el, index) => <li key={index} style={liStyle} >Tarea: {el.item.value}</li>)}
    </ul>
  )
}