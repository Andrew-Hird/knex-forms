var db = require('./db.js')

module.exports = {
  get: get,
  addNew: addNew,
  addUser: addUser
}

function get (req, res) {
  db.get()
    .then(function (users) {
      vm = { users: users }
      res.render('users', vm)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function addNew (req, res) {
  res.render('new')
}

function addUser (req, res) {
  db.addUser(req.body)
  .then(function () {
    res.redirect('/users')
  })
  .catch(function () {
    res.status(500).send(err.message)
  })
}
