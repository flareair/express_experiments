angular
  .module('App')
  .controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$location', 'Api', 'pageTitle'];

function RootCtrl($location, Api, pageTitle) {

    var vm = this;
    
    vm.pageTitle = pageTitle;

    vm.appData = [];

    getAppData();

    function getAppData() {
      return Api.getAppData()
        .then (function(data) {
          vm.appData = data;
          return vm.appData;
        });
    }

    vm.isActive = function(route) {
      return route === $location.path();
    };
}
