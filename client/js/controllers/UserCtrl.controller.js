angular
  .module('App')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$location', 'Api'];

function UserCtrl($location, Api) {
  var vm = this;
  Api.getUser()
    .success(function(user) {
      // vm.$parent.pageTitle = Api.getPageTitle($location.path(), user.name);
      vm.info = user;
      console.log(user);
    })
    .error(function() {
      vm.info = undefined;
      console.log('User not found!!!');
    });
}