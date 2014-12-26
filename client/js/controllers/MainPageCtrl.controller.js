angular
  .module('App')
  .controller('MainPageCtrl', MainPageCtrl);

MainPageCtrl.$inject = ['pageTitle'];

function MainPageCtrl(pageTitle) {
  pageTitle.setTitle('Welcome!');
};