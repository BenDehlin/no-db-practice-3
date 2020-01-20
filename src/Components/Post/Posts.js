import React from 'react'
import Post from './Post'
import '../../Styles/App.css'
import '../../Styles/Posts.css'



export default function Posts(props){
  const {posts, handleDelete, handleEdit} = props
  let list = posts.map((post, index) => {
    return <Post 
              key={index} 
              post={post}
              handleDelete={handleDelete}
              handleEdit={handleEdit} />
  })
  return(
    <div>
      <h1>POSTS:</h1>
      <div>{list}</div>
    </div>
  )
}