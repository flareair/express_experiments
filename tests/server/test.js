var should = require('should');
var appData = require('../../app/config/constants');



describe('App default port', function() {
  it('should have type Number', function() {
    appData.defaultPort.should.be.a.Number;
  });

  it('should be equal to 8000', function() {
    appData.defaultPort.should.be.exactly(8000);
  });
});