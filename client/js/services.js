App.factory('Api', function($http, $routeParams) {
  return {
    getUsers : function() {
      return $http.get('api/users');
    },
    getAppData: function() {
      return $http.get('api/appinfo');
    },
    getUser: function() {
      return $http.get('api/user/'+ $routeParams.id);
    },
    getPageTitle: function(route, userName) {
      var title = '';
      route = route.split('/');
      switch (route[1]) {
        case 'users':
          title =  '| Users';
          break;
        case 'user':
          title =  '| ' + userName;
          break;          
        default:
          title =  '';
      }
      return title;
    }
  };
});