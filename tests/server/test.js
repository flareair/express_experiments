var should = require('should');
var request = require('supertest');
var app = require('../../app');

describe('User Api tests', function() {
  describe('Get all users request', function() {
    
    it('Should response with JSON in UTF-8', function(done) {
      request(app)
        .get('/api/users')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });

    it('Response should be OK, (not undef or smth)', function(done) {
      request(app)
        .get('/api/users')
        .expect(200)
        .expect(function(res) {
          res.body.should.be.ok;
        })
        .end(done);
    });

    it('Response should contain 3 users', function(done) {
      request(app)
        .get('/api/users')
        .expect(200)
        .expect(function(res) {
          res.body.length.should.be.exactly(3);
        })
        .end(done);
    });

  });
});