angular
  .module('App')
  .factory('Api', Api);

Api.$inject = ['$http'];



function Api($http) {

  var services = {
    getUsers: getUsers,
    getAppData: getAppData,
    getUser: getUser
  };

  return services;


  function getAppData() {
    return $http.get('api/appinfo')
      .then(getAppDataSuccess)
      .catch(getAppDataFailed);

    function getAppDataSuccess(res) {
      // console.log(res);
      return res.data;
    }
    function getAppDataFailed(err) {
      // console.log(err);
      return undefined;
    }
  }

  function getUsers() {
    return $http.get('api/users')
      .then(getUsersSuccess)
      .catch(getUsersFail);

      function getUsersSuccess(res) {
        return res.data;
      }
      function getUsersFail(err) {
        return undefined;
      }
  }

  function getUser(name) {
    return $http.get('api/users/'+ name)
      .then(getUserSuccess)
      .catch(getUserFail);

      function getUserSuccess(res) {
        return res.data;
      }

      function getUserFail(err) {
        return undefined;
      }
  }

}




