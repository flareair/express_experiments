App.factory('Api', function($http, $routeParams) {
  return {
    getUsers : function() {
      return $http.get('api/users');
    },
    getAppData: function() {
      return $http.get('api/appinfo');
    },
    getUser: function() {
      return $http.get('api/users/'+ $routeParams.name);
    },
    getPageTitle: function(route, userName) {
      var title = '';
      console.log(route);
      route = route.split('/');
      switch (route[1]) {
        case 'users':
          title =  '| Users';
          if (route[2]) {
            title =  '| User ' + userName;
          }
          break;      
        default:
          title =  '';
      }
      return title;
    }
  };
});