const request = require('supertest')
const app = require('../index')
const expect = require('chai').expect

describe('GET', function (){
  describe('/', function () {
    it('should response 200', function (done) {
      request(app)
      .get('/')
      .expect(200, done)
    })
  })
  describe('/about', function () {
    it('should response 404', function (done) {
      request(app)
      .get('/about')
      .expect(404, done)
    })
  })
})

describe('CRUD Taco Test', function () {
  describe('GET /tacos', function () {
    it('should return all TACOs', function (done) {
      request(app)
      .get('/tacos')
      .end(function (err, res) {
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('array')
        if (res.body.length) {
          expect(res.body[0]).to.have.property('name')
          expect(res.body[0]).to.have.property('amount')
        }
        done()
      })
    })
  })
  describe('POST /tacos', function () {
    it('should create new TACO', function (done) {
      request(app)
      .post('/tacos')
      .send({
        name: 'Dominic',
        amount: 1000
      })
      .end(function (err, res) {
        done()
      })
    })
  })
})
