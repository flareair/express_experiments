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