var App = angular.module('App',[]);



App.controller('mainPageCtrl', function($scope, $http) {

  $scope.message = 'empty';
  $http.get('/message1').
    success(function(data) {
      $scope.message = data.message;
    }).
    error(function(data) {
      $scope.message = data;
    });

  // this.message = message;
  
});