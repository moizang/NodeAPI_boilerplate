const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const dirtyChai = require('dirty-chai')

const handlers = require('../app/handlers')

chai.should()
chai.use(sinonChai)
chai.use(dirtyChai)

const request_stub = {
  params: {
    name: 'toto'
  }
}

const reply_stub = sinon.stub()

describe('handlers.js', () => {
  describe('helloWorld', () => {
    before(() => {
      return handlers.helloWorld(request_stub, reply_stub)
    })
    after(() => {
      reply_stub.resetHistory()
    })
    it('should call reply with "hello world"', () => {
      reply_stub.should.have.been.calledWith({
        message: 'hello world'
      })
    })
  })
  describe('helloName', () => {
    before(() => {
      return handlers.helloName(request_stub, reply_stub)
    })
    after(() => {
      reply_stub.resetHistory()
    })
    it('should call reply with "hello" and request param name', () => {
      reply_stub.should.have.been.calledWith({
        message: 'hello toto'
      })
    })
  })
})
