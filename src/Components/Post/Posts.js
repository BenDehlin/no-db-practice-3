import React from 'react'
import Post from './Post'
import '../../Styles/App.css'
import '../../Styles/Posts.css'



export default function Posts(props){
  const {list, handleDelete, handleEdit, type} = props
  let mappedList = list.map((item, index) => {
    return <Post 
              type={type}
              key={index} 
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit} />
  })
  return(
    <div>
      <h1>{type}:</h1>
      <div>{mappedList}</div>
    </div>
  )
}