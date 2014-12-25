angular
  .module('App')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/index',
      controller: 'MainPageCtrl',
      controllerAs: 'mainpage'
    }).
    when('/users', {
      templateUrl: '/partials/users',
      controller: 'UsersCtrl',
      controllerAs: 'users'
    }).
    when('/404', {
      templateUrl: '/partials/404'
    }).      
    when('/users/:name', {
      templateUrl: '/partials/user',
      controller: 'UserCtrl',
      controllerAs: 'user'
    }).
    otherwise({
     redirectTo: '/404'
    });
  $locationProvider.html5Mode(true);
}