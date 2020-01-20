import React from 'react'
import Item from './Item'
import '../../Styles/App.css'
import '../../Styles/List.css'

export default function List(props){
  const {list, handleDelete, handleEdit, type} = props
  let mappedList = list.map((item, index) => {
    return (
    <Item 
      type={type}
      key={index}
      item={item}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />)
  })

  return(
    <div>
      <h1>{type}:</h1>
      <div>{mappedList}</div>
    </div>
  )
}