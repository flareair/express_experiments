describe('RootCtrl', function() {
  var controller = null;
  var $scope = null;
  var $httpBackend = null;
  var Api = null;

  beforeEach(function() {
    module('App');
  });

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Api_) {
    $httpBackend = _$httpBackend_;
    $scope = $rootScope.$new();
    Api = _Api_;
  }));

  afterEach(function () { 
      // $httpBackend.verifyNoOutstandingRequest();
      // $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get right appdata from server', function() {
    console.log(Api.getUsers);
    Api.getUsers()
      .success(function(info) {
        $scope.appData = info;
        console.log('error!');
        $scope.$apply();

      })
      .error(function() {
        $scope.appData = undefined;
        console.error('Cant get App data');
      });
    
  });
});