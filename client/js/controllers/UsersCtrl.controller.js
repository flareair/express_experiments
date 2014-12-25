angular
  .module('App')
  .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['$location', 'Api'];

function UsersCtrl($location, Api) {
  var vm = this;

  // this.$parent.pageTitle = Api.getPageTitle($location.path());
  // Get users
  Api.getUsers()
    .success(function(users) {
      vm.usersList = users;
    })
    .error(function() {
      vm.usersList = undefined;
      console.log('Cant get user list');
    });
}