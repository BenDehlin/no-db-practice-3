let users = [{id: 0, name: 'Ben', age: 27}]
let id = 1


module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(users)
  },
  postUsers: (req, res) => {
    const {name, age} = req.body
    const user = {id, name, age}
    id++
    users.push(user)
    res.status(200).send(users)
  },
  putUsers: (req, res) => {
    const {name, age} = req.body
    const {id} = req.params
    const i = users.findIndex(user => user.id === +id)
    users[i].name = name
    users[i].age = age
    res.status(200).send(users)
  },
  deleteUsers: (req, res) => {
    const {id} = req.params
    users = users.filter(user => user.id !== +id)
    res.status(200).send(users)
  }
}