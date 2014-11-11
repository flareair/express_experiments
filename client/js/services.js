App.factory('Api', function($http) {
  return {
    getUsers : function() {
      return $http.get('/users');
    },
    getAppData: function() {
      return $http.get('/appinfo');
    }
  };
});