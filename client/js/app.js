var App = angular.module('App',['ngRoute']);

App.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: 'UsersCtrl'
      });
    $locationProvider.html5Mode(true);
  }]);