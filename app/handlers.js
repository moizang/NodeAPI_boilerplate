'use strict'

module.exports = {
  helloWorld: function (request, reply) {
    return reply({
      message: 'hello world'
    })
  },
  helloName: function (request, reply) {
    return reply({
      message: `hello ${request.params.name}`
    })
  }
}
