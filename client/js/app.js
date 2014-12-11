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
      when('/user/notfound', {
        templateUrl: '/partials/500'
      }).      
      when('/user/:id', {
        templateUrl: '/partials/user',
        controller: 'UserCtrl'
      }).
      otherwise({
       templateUrl: '/partials/404'
      });
    $locationProvider.html5Mode(true);
  }]);