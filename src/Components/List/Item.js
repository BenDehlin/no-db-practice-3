import React from 'react'
import '../../Styles/App.css'
import '../../Styles/Item.css'

export default function Item(props){
  const {item, handleDelete, handleEdit, type} = props
  const {id} = item
  let items = []
  for(let key in item){
    if(key !== 'id'){
      items.push(<div key={key}>{item[key]}</div>)
    }
  }

  return(
    <div>
      <div>{items}</div>
      <button 
        onClick={() => handleEdit(id, type)}
      >Edit</button>
      <button
        onClick={() => handleDelete(id, type)}
      >Delete</button>
    </div>
  )
}