angular
  .module('App')
  .factory('Api', Api);

Api.$inject = ['$http', '$routeParams'];

function Api($http, $routeParams) {
  return {
    getUsers : function() {
      return $http.get('api/users');
    },
    getAppData: function() {
      return $http.get('api/appinfo');
    },
    getUser: function() {
      return $http.get('api/users/'+ $routeParams.name);
    }
  };
}