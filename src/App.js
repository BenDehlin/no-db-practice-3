import React, {Component} from 'react'
import axios from 'axios'
import PostSubmit from './Components/Post/PostSubmit'
import PostEdit from './Components/Post/PostEdit'
import Posts from './Components/Post/Posts'
import Users from './Components/User/Users'
import UserSubmit from './Components/User/UserSubmit'
import UserEdit from './Components/User/UserEdit'
import './Styles/App.css'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      users: [],
      posts: [],
      userUrl: 'http://localhost:3333/api/users',
      postUrl: 'http://localhost:3333/api/posts',
      togglePostEdit: false,
      toggleUserEdit: false,
      currentPost: {},
      currentUser: {}
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

  handleSubmit=(body, submitType, dataType)=>{
    const {userUrl, postUrl} = this.state
    console.log(userUrl)
    const {id} = body
    console.log(body, submitType, dataType)
    let url = ''
    dataType === 'users' ? url = userUrl : url = ''
    dataType === 'posts' ? url = postUrl : url = ''
    console.log(url)
    if(submitType === 'post'){
      axios.post(url, body).then(results => {
        this.setState({[dataType]: results.data})
      }).catch(err => console.log(err))
    }else if(submitType === 'put'){
      axios.put(`${url}/${id}`, body).then(results => {
        this.setState({[dataType]: results.data})
      })
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
  handleUserDelete(id){
    alert(`Delete user ${id} coming soon`)
  }
  handlePostEdit(id){
    const {posts} = this.state
    let post = posts.find(post => post.id === id)
    this.setState({
      togglePostEdit: !this.state.togglePostEdit,
      currentPost: post
    })
  }
  handleUserEdit(id){
    const {users} = this.state
    let user = users.find(user => user.id === id)
    this.setState({
      toggleUserEdit: !this.state.toggleUserEdit,
      currentUser: user
    })
  }

  render(){
    const {users, posts, togglePostEdit, toggleUserEdit, currentPost, currentUser} = this.state
    return(
      <section className="App">
        <section className="user-section">
          {
            !toggleUserEdit ?
            <UserSubmit
              handleSubmit={this.handleSubmit} /> :
            <UserEdit
              handleSubmit={this.handleSubmit}
              user={currentUser} />
          }
          <Users 
          users={users}
          handleDelete={this.handleUserDelete}
          handleEdit={this.handleUserEdit} />
        </section>
        <section className="post-section">
          {
            !togglePostEdit ?
            <PostSubmit 
              handleSubmit={this.handleSubmit} /> :
            <PostEdit 
              handleSubmit={this.handleSubmit}
              post={currentPost} />
          }
          <Posts 
            posts={posts} 
            handleDelete={this.handlePostDelete}
            handleEdit={this.handlePostEdit} />
        </section>
      </section>
    )
  }
}