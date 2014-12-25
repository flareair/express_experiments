App.controller('RootCtrl', ['$scope','$location', 'Api',
  function($scope, $location, Api) {
  // get App data

    Api.getAppData()
      .success(function(info) {
        $scope.appData = info;
      })
      .error(function() {
        $scope.appData = undefined;
        console.error('Cant get App data');
      });


    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);