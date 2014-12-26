angular
  .module('App')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$routeParams', 'api', 'pageTitle'];

function UserCtrl($routeParams, api, pageTitle) {
  var vm = this;
  vm.info = [];

  getUser();

  function getUser() {
    return api.getUser($routeParams.name)
      .then (function(data) {
        vm.info = data;
        return vm.info;
      });
  }

}