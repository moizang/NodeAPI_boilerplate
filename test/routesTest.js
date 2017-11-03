const chai = require('chai')
const sinonChai = require('sinon-chai')
const dirtyChai = require('dirty-chai')

const routes = require('../app/routes')
const handlers = require('../app/handlers')

chai.should()
chai.use(sinonChai)
chai.use(dirtyChai)

describe('routes.js', () => {
  describe('/hello', () => {
    before(() => {
      this.helloRoute = routes.find(route => route.path.endsWith('hello'))
    })
    it('should exist', () => {
      this.helloRoute.should.exist()
    })
    it('should have a /hello path', () => {
      this.helloRoute.path.should.equal('/hello')
    })
    it('should be accessible using GET', () => {
      this.helloRoute.method.should.equal('GET')
    })
    it('should use helloWorld handler', () => {
      this.helloRoute.handler.should.equal(handlers.helloWorld)
    })
  })
  describe('/hello/{name}', () => {
    before(() => {
      this.helloNameRoute = routes.find(route => route.path.endsWith('hello/{name}'))
    })
    it('should exist', () => {
      this.helloNameRoute.should.exist()
    })
    it('should have a /hello path', () => {
      this.helloNameRoute.path.should.equal('/hello/{name}')
    })
    it('should be accessible using GET', () => {
      this.helloNameRoute.method.should.equal('GET')
    })
    it('should use helloName handler', () => {
      this.helloNameRoute.handler.should.equal(handlers.helloName)
    })
  })
})
