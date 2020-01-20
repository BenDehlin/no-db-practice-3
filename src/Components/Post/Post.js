import React from 'react'
import '../../Styles/App.css'
import '../../Styles/Post.css'



export default function Post(props){
  const {item, handleEdit, handleDelete, type} = props
  let list = []
  for(let key in item){
    if(key !== 'id'){
      list.push(<div key={key}>{item[key]}</div>)
    }
  }
  const {id} = item
  return(
    <div>
      <div>{list}</div>
      <button
        onClick={() => handleEdit(id)}
      >Edit</button>
      <button
        onClick={() => handleDelete(id, type)}
      >Delete</button>
    </div>
  )
}