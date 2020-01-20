import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/UserSubmit.css'


export default class UserSubmit extends Component{
  constructor(props){
    super(props)
    this.state = {
      userNameInput: '',
      userAgeInput: ''
    }
  }
  handleChange=({name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = () =>{
    const {userNameInput, userAgeInput} = this.state
    let user = {
      name: userNameInput,
      age: userAgeInput
    }
    this.props.handleSubmit(user, 'post', 'users')
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
          onChange = {(e) => this.handleChange(e.target)}
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