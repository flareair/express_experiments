describe('pageTitle factory', function() {
  var factory;
  beforeEach(module('App'));

  beforeEach(inject(function(pageTitle){
     factory = pageTitle;
  }));

  it('should return app name Microtalk by default', function() {
    factory.setTitle();
    var title = factory.getTitle();
    title.should.be.a.string;
    title.should.equal('Microtalk');
  });

  it('should set correct title', function() {
    var newTitle = 'foobar';
    factory.setTitle(newTitle);
    var title = factory.getTitle();
    title.should.be.a.string;
    title.should.equal('Microtalk | ' + newTitle);
  });
});

describe('api factory', function() {
  var factory, $httpBackend;
  beforeEach(module('App'));

  beforeEach(inject(function(api, _$httpBackend_) {
     factory = api;
     $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should return right app data', function() {
    var data = 'no data';

    $httpBackend
      .whenGET('api/appinfo')
      .respond({name: 'foo', description: 'bar'});

    factory.getAppData()
      .then(function(res) {
        data = res;
      });

    $httpBackend.flush();
    data.should.be.a.object;
    data.name.should.be.equal('foo');
    data.description.should.be.equal('bar');


  });
});