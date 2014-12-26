angular
  .module('App')
  .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['Api', 'pageTitle'];

function UsersCtrl(Api, pageTitle) {
  var vm = this;
  vm.usersList = [];

  pageTitle.setTitle('Users');
  
  getUsers();

  function getUsers() {
    return Api.getUsers()
      .then (function(data) {
        vm.usersList = data;
        console.log(vm.usersList);
        return vm.usersList;
      });
  }
}