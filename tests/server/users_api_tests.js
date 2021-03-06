var should = require('should');
var request = require('supertest');
var app = require('../../app');
var dbSeed = require('../../app/utils/dbSeed');

describe('User Api tests', function() {
  before(function(done) {
    dbSeed.createDB(done);
  });

  describe('Get all users response', function() {

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
        .send({
          name: 'test',
          password: '123456asd',
          email: "foo@bar.com"
        })
        .expect(200)
        .expect(function(res) {
          res.text.should.be.exactly('OK');
        })        
        .end(done);
    });

    it('should send error if username is not unique', function(done) {
      request(app)
        .post('/api/newuser')
        .set('Content-Type', 'application/json')
        .send({
          name: 'Yaroslav',
          password: 'foobar',
          email: "foo@bar1.ru"
        })
        .expect(500)
        .expect(function(res) {
          var error = JSON.parse(res.error.text);
          // console.log(error);
          error.code.should.be.exactly(11000);
          error.err.should.match(/Yaroslav/);
        })        
        .end(done);
    });

    it('should send error if email is not unique', function(done) {
      request(app)
        .post('/api/newuser')
        .set('Content-Type', 'application/json')
        .send({
          name: 'foobar322',
          password: 'foobar',
          email: "email@ya.ru"
        })
        .expect(500)
        .expect(function(res) {
          var error = JSON.parse(res.error.text);
          // console.log(error);
          error.code.should.be.exactly(11000);
          error.err.should.match(/email@ya.ru/);
        })        
        .end(done);
    });

    it('Should send error if username, password, or email is empty', function(done) {
      request(app)
        .post('/api/newuser')
        .set('Content-Type', 'application/json')
        .send({
          name: '',
          password: '',
          email: ''
        })
        .expect(500)
        .expect(function(res) {
          var error = JSON.parse(res.error.text);
          // console.log(error);
          error.name.should.be.exactly('ValidationError');
          error.errors.name.should.be.ok;
          error.errors.hashedPassword.should.be.ok;
          error.errors.email.name.should.be.ok;
        })        
        .end(done);
    });
  });

  after(function(done) {
    dbSeed.refreshDB(done);
  });
});