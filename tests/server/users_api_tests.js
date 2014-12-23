var should = require('should');
var request = require('supertest');
var app = require('../../app');
var utils = require('../../app/utils/utils');

describe('User Api tests', function() {
    before(function(done) {
      utils.clearDB(done);
    });
  describe('Get all users response', function() {

    before(function(done) {
      utils.inputSeed(done);
    });

    it('should be JSON in UTF-8', function(done) {
      request(app)
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should be OK, (not undef or smth)', function(done) {
      request(app)
        .get('/api/users')
        .expect(200)
        .expect(function(res) {
          res.body.should.be.ok;
        })
        .end(done);
    });

    it('should contain 3 users', function(done) {
      request(app)
        .get('/api/users')
        .expect(200)
        .expect(function(res) {
          res.body.length.should.be.exactly(3);
        })
        .end(done);
    });

  });

  describe('Get user by name response', function() {

    it('should be with JSON in UTF-8', function(done) {
      request(app)
        .get('/api/users/Yaroslav')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should be ОК, (not undef or smth)', function(done) {
      request(app)
        .get('/api/users/Yaroslav')
        .expect(200)
        .expect(function(res) {
          res.body.should.be.ok;
        })
        .end(done);
    });

    it('should have username Yaroslav and age 23', function(done) {
      request(app)
        .get('/api/users/Yaroslav')
        .expect(200)
        .expect(function(res) {
          res.body.name.should.be.exactly('Yaroslav');
          res.body.about.age.should.be.exactly('23');
        })
        .end(done);
    });

    it('should respond with 500 and empty JSON', function(done) {
      request(app)
        .get('/api/users/unknownuser')
        .expect(500)
        .expect(function(res) {
          res.body.should.be.empty;
        })
        .end(done);
    });

  });

  describe('POST a new user request', function() {
    it('should create new user in db', function(done) {
      request(app)
        .post('/api/newuser')
        .set('Content-Type', 'application/json')
        .send({name: 'test'})
        .expect(200)
        .end(done);      
    });
  });
});