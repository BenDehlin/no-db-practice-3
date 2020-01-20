import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/Submit.css'

export default class CarSubmit extends Component{
  constructor(props){
    super()
    this.state = {
      makeInput: '',
      modelInput: ''
    }
  }

  handleChange({name, value}){
    this.setState({[name]: value})
  } 

  render(){
    const {makeInput, modelInput} = this.state
    const {handleSubmit} = this.props
    return(
      <section className="form">
        <input
          className="make-field"
          name="makeInput"
          value={makeInput}
          placeholder="enter make"
          onChange={(e)=> this.handleChange(e.target)} />
        <input
          className="model-field"
          name="modelInput"
          value={modelInput}
          placeholder="enter model"
          onChange={(e)=> this.handleChange(e.target)} />
        <button 
          className="submit-button"
          onClick={() => {
            handleSubmit({make: makeInput, model: modelInput}, 'post', 'cars')
            this.setState({makeInput: '', modelInput: ''})
          }}
        >Submit</button>
      </section>
    )
  }
}