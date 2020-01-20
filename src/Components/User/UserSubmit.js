import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/Submit.css'


export default class UserSubmit extends Component{
  constructor(props){
    super(props)
    let {id, name, age} = this.props || ''
    this.state = {
      id,
      name: name,
      age: age
    }
  }
  handleChange=({name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = () =>{
    const {name, age} = this.state
    let user = {
      name: name,
      age: age
    }
    this.props.handleSubmit(user, 'post', 'users')
  }

  render(){
    const {name, age} = this.state
    return(
      <div className = "form">
        <input 
          className = "user-input"
          name = "name"
          value = {name}
          placeholder = "Enter Name"
          onChange = {(e) => this.handleChange(e.target)}
        />
        <input
          className = "user-input"
          name = "age"
          value = {age}
          placeholder = "Age"
          onChange = {(e) => this.handleChange(e.target)}
        />
        <button
          onClick={() => {
            this.handleSubmit()
            this.setState({name: '', age: ''})
          }}
        >Submit</button>
      </div>
    )
  }
}