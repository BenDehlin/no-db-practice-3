let posts = [{id: 0, content: 'hello world'}]
let id = 1

module.exports = {
  getPosts: (req, res) => {
    res.status(200).send(posts)
  },
  postPosts: (req, res) => {
    const {content} = req.body
    const post = {id, content}
    id++
    posts.push(post)
    res.status(200).send(posts)
  },
  putPosts: (req, res) => {
    const {content} = req.body
    const {id} = req.params
    const i = posts.findIndex(post => post.id === +id)
    posts[i].content = content
    res.status(200).send(posts)
  },
  deletePosts: (req, res) => {
    const {id} = req.params
    posts = posts.filter(post => post.id !== +id)
    res.status(200).send(posts)
  }
}