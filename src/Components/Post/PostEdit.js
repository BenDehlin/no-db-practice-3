import React, {Component} from 'react'
import '../../Styles/App.css'
import '../../Styles/Submit.css'
import '../../Styles/PostEdit.css'


export default class PostEdit extends Component{
  constructor(props){
    super(props)
    const {post} = props
    const {id, content} = post 
    this.state = {
      id,
      postContent: content
    }
  }

  handleChange=({name, value})=>{
    this.setState({[name]: value})}

  render(){
    let {postContent, id} = this.state
    let {handleSubmit} = this.props
    return(
      <div 
        className="form">
        <textarea
          name="postContent"
          value={postContent}
          placeholder="edit post"
          onChange={(e) => this.handleChange(e.target)} />
        <button
          className="post-submit"
          onClick={()=>{ 
            handleSubmit({id, content: postContent}, 'put', 'posts')
            this.setState({postContent: ''})
          }}
        >Submit</button>
      </div>
    )
  }
}