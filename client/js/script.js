var App = angular.module('App',[]);

App.factory('AppName', function($http) {
  return $http.get('/appname').
  success(function(data) {
    return data;
  }).
  error(function(data, status) {
    console.error('Error recieving data, status: %s', status);
  });
});

App.controller('MainPageCtrl', function($scope, $http, AppName) {
  $scope.appName = AppName;
  $scope.users = '';
  $http.get('/users').
    success(function(data) {
      console.log(data);
      $scope.users = data;
      console.log($scope.users);
    }).
    error(function(data, status) {
      console.error('Error recieving data, status: %s', status);
    });
});