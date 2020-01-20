import React, {Component} from 'react'


export default class PostSubmit extends Component{
  constructor(props){
    super(props)
    this.state = {
      postContent: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({name, value}){
    this.setState({[name]: value})
  }

  render(){
    const {postContent} = this.state
    const {handleSubmit} = this.props
    return(
      <section id="post-submit">
        <textarea
          id="post-field" 
          name='postContent' 
          value={postContent} 
          placeholder="create post" 
          onChange={(e)=> this.handleChange(e.target)} />
        <button
          id="submit-button"
          onClick={()=> {
            handleSubmit({content: postContent}, 'post')
            this.setState({postContent: ''})
          }}
        >Submit</button>
      </section>
    )
  }
}