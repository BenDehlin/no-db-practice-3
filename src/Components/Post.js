import React from 'react'


export default function Post(props){
  const {post, handleEdit, handleDelete} = props
  const {content, id} = post
  return(
    <div>
      <div>{content}</div>
      <button
        onClick={() => handleEdit(id)}
      >Edit</button>
      <button
        onClick={() => handleDelete(id)}
      >Delete</button>
    </div>
  )
}