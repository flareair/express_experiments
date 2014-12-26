angular
  .module('App')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$routeParams', 'Api', 'pageTitle'];

function UserCtrl($routeParams, Api, pageTitle) {
  var vm = this;
  vm.info = [];

  getUser();

  function getUser() {
    return Api.getUser($routeParams.name)
      .then (function(data) {
        vm.info = data;
        return vm.info;
      });
  }

}