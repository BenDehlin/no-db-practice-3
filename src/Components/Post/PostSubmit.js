import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/PostSubmit.css'



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
      <section className="post-form">
        <textarea
          className="post-field" 
          name='postContent' 
          value={postContent} 
          placeholder="create post" 
          onChange={(e)=> this.handleChange(e.target)} />
        <button
          className="post-submit"
          onClick={()=> {
            handleSubmit({content: postContent}, 'post', 'posts')
            this.setState({postContent: ''})
          }}
        >Submit</button>
      </section>
    )
  }
}