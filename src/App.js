import React, {Component} from 'react'
import axios from 'axios'
import List from './Components/List/List'
import PostSubmit from './Components/Post/PostSubmit'
import PostEdit from './Components/Post/PostEdit'
import UserSubmit from './Components/User/UserSubmit'
import UserEdit from './Components/User/UserEdit'
import CarSubmit from './Components/Car/CarSubmit'
import CarEdit from './Components/Car/CarEdit'
import './Styles/App.css'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      users: [],
      posts: [],
      cars: [],
      userUrl: 'http://localhost:3333/api/users',
      postUrl: 'http://localhost:3333/api/posts',
      carUrl: 'http://localhost:3333/api/cars',
      togglePostEdit: false,
      toggleUserEdit: false,
      toggleCarEdit: false,
      currentPost: {},
      currentUser: {},
      currentCar: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handlePostEdit = this.handlePostEdit.bind(this)
    this.handleUserEdit = this.handleUserEdit.bind(this)
    this.handleCarEdit = this.handleCarEdit.bind(this)
    this.getEverything = this.getEverything.bind(this)
  }

  componentDidMount(){
    this.getEverything()
  }

  getEverything(){
    const {userUrl, postUrl, carUrl} = this.state
    axios.get(userUrl).then(results => {
      axios.get(postUrl).then(res => {
        this.setState({
          users: results.data, 
          posts: res.data
        })
      })
    }).catch(err => console.log(err))
    axios.get(carUrl).then(results => {
      this.setState({
        cars: results.data
      })
    }).catch(err => console.log(err))
  }

  handleChange({name, value}){
    this.setState({[name]: value})
  }

  handleSubmit(body, submitType, dataType){
    const {userUrl, postUrl, carUrl} = this.state
    console.log(userUrl)
    const {id} = body
    let url = ''
    if(dataType === 'users'){url = userUrl}
    if(dataType === 'posts'){url = postUrl}
    if(dataType === 'cars'){url = carUrl}
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

  handleDelete(id, dataType){
    const {postUrl, userUrl, carUrl} = this.state
    let url = ''
    if(dataType === 'posts'){url = postUrl}
    if(dataType === 'users'){url = userUrl}
    if(dataType === 'cars'){url = carUrl}
    axios.delete(`${url}/${id}`).then(results => {
      this.setState({[dataType]: results.data})
    })
  }

  handleEdit(id, dataType){
    if(dataType==='users'){this.handleUserEdit(id)}
    if(dataType==='posts'){this.handlePostEdit(id)}
    if(dataType==='cars'){this.handleCarEdit(id)}
  }

  handlePostEdit(id){
    const {posts, togglePostEdit} = this.state
    let post = posts.find(post => post.id === id)
    this.setState({
      togglePostEdit: !togglePostEdit,
      currentPost: post
    })
  }

  handleUserEdit(id){
    const {users, toggleUserEdit} = this.state
    let user = users.find(user => user.id === id)
    this.setState({
      toggleUserEdit: !toggleUserEdit,
      currentUser: user
    })
  }

  handleCarEdit(id){
    const {cars, toggleCarEdit} = this.state
    let car = cars.find(car => car.id === +id)
    this.setState({
      toggleCarEdit: !toggleCarEdit,
      currentCar: car
    })
  }

  render(){
    const {users, posts, cars, togglePostEdit, toggleUserEdit, toggleCarEdit, currentPost, currentUser, currentCar} = this.state
    return(
      <section className="App">
        <section className="user-section">
          {
            !toggleUserEdit ?
            <UserSubmit
              handleSubmit={this.handleSubmit} /> :
            <UserSubmit
              handleSubmit={this.handleSubmit}
              user={currentUser} />
          }
          <List 
          type="users"
          list={users}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit} />
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
          <List
            type="posts" 
            list={posts} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />
        </section>
        <section className="car-section">
          {
            !toggleCarEdit ?
            <CarSubmit 
              handleSubmit={this.handleSubmit} /> :
            <CarEdit 
              handleSubmit={this.handleSubmit}
              car={currentCar} />
          }
          <List
            type="cars"
            list={cars} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />
        </section>
      </section>
    )
  }
}