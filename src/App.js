import React, {Component} from 'react'
import axios from 'axios'
import PostSubmit from './Components/PostSubmit'
import Posts from './Components/Posts'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      users: [],
      posts: [],
      userUrl: 'http://localhost:3333/api/users',
      postUrl: 'http://localhost:3333/api/posts'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePostSubmit = this.handlePostSubmit.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handlePostDelete = this.handlePostDelete.bind(this)
    this.handleUserDelete = this.handleUserDelete.bind(this)
    this.handlePostEdit = this.handlePostEdit.bind(this)
    this.handleUserEdit = this.handleUserEdit.bind(this)
    this.getEverything = this.getEverything.bind(this)
  }

  componentDidMount(){
    this.getEverything()
  }

  getEverything(){
    const {userUrl, postUrl} = this.state
    axios.get(userUrl).then(result => {
      axios.get(postUrl).then(res => {
        this.setState({users: result.data, posts: res.data})
      })
    }).catch(err => console.log(err))
  }

  handleChange({name, value}){
    this.setState({[name]: value})
  }

  handlePostSubmit(body, submitType){
    const {postUrl} = this.state
    if(submitType === 'post'){
      axios.post(postUrl, body).then(results => {
        this.setState({posts: results.data})
      }).catch(err => console.log(err))
    }
    else if(submitType === 'put'){
      let id = body.id
      axios.put(`${postUrl}/${id}`, body).then(results => {
        this.setState({posts: results.data})
      }).catch(err => console.log(err))
    }
  }

  handleUserSubmit(body, submitType){
    const {userUrl} = this.state
    if(submitType === 'post'){
      axios.post(userUrl, body).then(results => {
        this.setState({users: results.data})
      }).catch(err => console.log(err))
    }
    else if(submitType === 'put'){
      let id = body.id
      axios.put(`${userUrl}/${id}`, body).then(results => {
        this.setState({users: results.data})
      }).catch(err => console.log(err))
    }
  }

  handlePostDelete(id){
    const {postUrl} = this.state
    axios.delete(`${postUrl}/${id}`).then(results => {
      this.setState({posts: results.data})
    }).catch(err => console.log(err))
  }
  handleUserDelete(id){}
  handlePostEdit(id){
    alert(`Edit post ${id}`)
  }
  handleUserEdit(id){}

  render(){
    const {posts} = this.state
    return(
      <div>
        <PostSubmit handleSubmit={this.handlePostSubmit} />
        <Posts 
          posts={posts} 
          handleDelete={this.handlePostDelete}
          handleEdit={this.handlePostEdit} />
      </div>
    )
  }
}