angular
  .module('App')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['Api', 'pageTitle'];

function UserCtrl(Api, pageTitle) {
  var vm = this;

  Api.getUser()
    .success(function(user) {
      // vm.$parent.pageTitle = Api.getPageTitle($location.path(), user.name);
      vm.info = user;
      pageTitle.setTitle(vm.info.name);
      console.log(user);
    })
    .error(function() {
      vm.info = undefined;
      console.log('User not found!!!');
      pageTitle.setTitle('User not found');
    });
}