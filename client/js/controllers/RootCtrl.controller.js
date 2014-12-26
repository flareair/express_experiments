angular
  .module('App')
  .controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$location', 'Api', 'pageTitle'];

function RootCtrl($location, Api, pageTitle) {

    var vm = this;
    
    vm.pageTitle = pageTitle;


    Api.getAppData()
    .success(function(info) {
      vm.appData = info;
    })
    .error(function() {
      vm.appData = undefined;
      console.error('Cant get App data');
    });

    vm.isActive = function(route) {
      return route === $location.path();
    };
}
