const express = require("express")
const app = express()
const port = 3333
const cors = require('cors')

const userCtrl = require('./controllers/userController')
const postCtrl = require('./controllers/postController')
const userUrl = '/api/users'
const postUrl = '/api/posts'

app.use(express.json())
app.use(cors())

//ENDPOINTS

app.get(userUrl, userCtrl.getUsers)
app.post(userUrl, userCtrl.postUsers)
app.put(`${userUrl}/:id`, userCtrl.putUsers)
app.delete(`${userUrl}/:id`, userCtrl.deleteUsers)

app.get(postUrl, postCtrl.getPosts)
app.post(postUrl, postCtrl.postPosts)
app.put(`${postUrl}/:id`, postCtrl.putPosts)
app.delete(`${postUrl}/:id`, postCtrl.deletePosts)


app.listen(port, ()=> console.log(`Listening on port ${port}`))