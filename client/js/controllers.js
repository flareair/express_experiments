App.controller('RootCtrl', ['$scope', 'Api', function($scope, Api) {
  // get App data

  Api.getAppData()
    .success(function(info) {
      $scope.appData = info;
    })
    .error(function() {
      $scope.appData = undefined;
      console.error('Cant get App data');
    });
}]);

App.controller('UsersCtrl', ['$scope', 'Api', function($scope, Api) {

  // Get users
  Api.getUsers()
    .success(function(users) {
      $scope.users = users;
    })
    .error(function() {
      $scope.users = undefined;
      console.log('Cant get user list');
    });
}]);
