var App = angular.module('App',['ngRoute']);

App.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: 'MainPageCtrl'
      }).
      when('/users', {
        templateUrl: '/partials/users',
        controller: 'UsersCtrl'
      }).
      when('/404', {
        templateUrl: '/partials/404'
      }).      
      when('/users/:id', {
        templateUrl: '/partials/user',
        controller: 'UserCtrl'
      }).
      otherwise({
       redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  }]);