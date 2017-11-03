const chai = require('chai')
const sinonChai = require('sinon-chai')
const dirtyChai = require('dirty-chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

chai.should()
chai.use(sinonChai)
chai.use(dirtyChai)

const server_connection_stub = sinon.stub()
const server_route_stub = sinon.stub()
const server_start_stub = sinon.spy(callback => callback())
const testRoutes = [{some: 'testRoutes'}]

proxyquire('../app/index.js',
  {
    hapi: {
      Server: function () {
        this.connection = server_connection_stub
        this.route = server_route_stub
        this.start = server_start_stub
        this.info = {
          uri: 'testUri'
        }
      }
    },
    './routes': testRoutes
  })

describe('index.js', () => {
  describe('when server.start calls callback with no error', () => {
    it('should call connection stub with correct parameters', () => {
      server_connection_stub.should.have.been.calledOnce().and.calledWithExactly(
        {
            host: 'localhost',
            port: 8000
        }
      )
    })
    it('should add routes from routes.js file', () => {
      server_route_stub.should.have.been.calledWith(testRoutes)
    })
    it('should have started the server', () => {
      server_start_stub.should.have.been.calledOnce()
    })
  })
})
