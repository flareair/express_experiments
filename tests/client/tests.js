describe('pageTitle factory', function() {
  var factory;
  beforeEach(module('App'));

  beforeEach(inject(function(pageTitle){
     factory = pageTitle;
  }));

  it('Should return app name Microtalk by default', function() {
    factory.setTitle();
    var title = factory.getTitle();
    title.should.be.a.string;
    title.should.equal('Microtalk');
  });

  it('Should set correct title', function() {
    var newTitle = 'foobar';
    factory.setTitle(newTitle);
    var title = factory.getTitle();
    title.should.be.a.string;
    title.should.equal('Microtalk | ' + newTitle);
  });
});

