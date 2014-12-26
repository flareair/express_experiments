angular
  .module('App')
  .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['api', 'pageTitle'];

function UsersCtrl(api, pageTitle) {
  var vm = this;
  vm.usersList = [];

  pageTitle.setTitle('Users');
  
  getUsers();

  function getUsers() {
    return api.getUsers()
      .then (function(data) {
        vm.usersList = data;
        return vm.usersList;
      });
  }
}