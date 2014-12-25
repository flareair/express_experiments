App.controller('UserCtrl', ['$scope', '$location', 'Api',
  function($scope, $location, Api) {
    Api.getUser()
      .success(function(user) {
        $scope.$parent.pageTitle = Api.getPageTitle($location.path(), user.name);
        $scope.user = user;
        console.log(user);
      })
      .error(function() {
        $scope.user = undefined;
        console.log('User not found!!!');
      });
  }]);