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

App.controller('MainPageCtrl', ['$scope', function() {
  // Main Page controller
}]);


App.controller('UsersCtrl', ['$scope', '$location', 'Api',
  function($scope, $location, Api) {

    $scope.$parent.pageTitle = Api.getPageTitle($location.path());
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

App.controller('UserCtrl', ['$scope', '$location', 'Api',
  function($scope, $location, Api) {
    Api.getUser()
      .success(function(user) {
        $scope.$parent.pageTitle = Api.getPageTitle($location.path(), user.name);
        $scope.user = user;
      })
      .error(function() {
        $scope.user = undefined;
      });

    

  }]);