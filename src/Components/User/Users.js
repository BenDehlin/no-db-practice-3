import React from 'react'
import '../../Styles/App.css'
import '../../Styles/Users.css'

export default function Users(props){
  let list = props.users.map((user, index) => {
    return(<div key={index}>{user.name}, {user.age}</div>)
  })
  return(
    <div>
      <h1>USERS:</h1>
      <div>{list}</div>
    </div>
  )
}