'use strict'

const handlers = require('./handlers')

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: handlers.helloWorld
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: handlers.helloName
  }
]
