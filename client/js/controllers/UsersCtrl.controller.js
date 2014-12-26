angular
  .module('App')
  .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['Api', 'pageTitle'];

function UsersCtrl(Api, pageTitle) {
  var vm = this;  
  pageTitle.setTitle('Users');
  
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