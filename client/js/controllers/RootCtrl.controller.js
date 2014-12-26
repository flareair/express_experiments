angular
  .module('App')
  .controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$location', 'api', 'pageTitle'];

function RootCtrl($location, api, pageTitle) {

    var vm = this;
    
    vm.pageTitle = pageTitle;

    vm.appData = [];

    getAppData();

    function getAppData() {
      return api.getAppData()
        .then (function(data) {
          vm.appData = data;
          return vm.appData;
        });
    }

    vm.isActive = function(route) {
      return route === $location.path();
    };
}
