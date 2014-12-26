angular
  .module('App')
  .factory('pageTitle', pageTitle);

function pageTitle() {
  var title = 'Microtalk';
  return {
    getTitle: function() {
      return title;
    },
    setTitle: function(newTitle) {
      if (newTitle) {
        title = 'Microtalk | ' + newTitle;
      }
      else {
        title = 'Microtalk';
      }
    }
  };
}