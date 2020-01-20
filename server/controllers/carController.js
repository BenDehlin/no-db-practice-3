let cars = [{id: 0, make: 'Honda', model: 'Accord'}]
let id = 1

module.exports = {
  getCars: (req, res) => {
    res.status(200).send(cars)
  },
  postCars: (req, res) => {
    const {make, model} = req.body
    const car = {id, make, model}
    id++
    cars.push(car)
    res.status(200).send(cars)
  },
  putCars: (req, res) => {
    const {make, model} = req.body
    const {id} = req.params
    const index = cars.findIndex(car => car.id === +id)
    cars[index].make = make
    cars[index].model = model
    res.status(200).send(cars)
  },
  deleteCars: (req, res) => {
    const {id} = req.params
    cars = cars.filter(car => car.id !== +id)
    res.status(200).send(cars)
  }
}