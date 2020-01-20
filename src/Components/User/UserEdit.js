import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/UserSubmit.css'
import '../../Styles/UserEdit.css'


export default class UserEdit extends Component{
  constructor(props){
    super(props)
    let {id, name, age} = this.props
    this.state ={
      id: id,
      userNameInput: name,
      userAgeInput: age
    }
  }
  handleChange=({name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    const {id, userNameInput, userAgeInput} = this.state
    let user = {
      id,
      name: userNameInput,
      age: userAgeInput
    }
    this.props.handleSubmit(user, 'put', 'users')
  }

  render(){
    const {userNameInput, userAgeInput} = this.state
    return(
      <div className = "user-form">
        <input
          className = "user-input"
          name = "userNameInput"
          value = {userNameInput}
          placeholder = "Enter Name"
          onChange ={(e) => this.handleChange(e.target)}
        />
        <input
          className = "user-input"
          name = "userAgeInput"
          value = {userAgeInput}
          placeholder = "Age"
          onChange = {(e) => this.handleChange(e.target)}
        />
        <button
          onClick={() => this.handleSubmit()}
        >Submit</button>
      </div>
    )
  }
}