var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  addUser: addUser
}

function get () {
  return knex('users').select()
}

function addUser () {

}
