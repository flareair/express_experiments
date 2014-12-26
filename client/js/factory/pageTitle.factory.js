angular
  .module('App')
  .factory('pageTitle', pageTitle);

function pageTitle() {
  var title = 'Microtalk';

  var service = {
    getTitle: getTitle,
    setTitle: setTitle
  };

  return service;

  function getTitle() {
    return title;
  }

  function setTitle(newTitle) {
    if (newTitle) {
      title = 'Microtalk | ' + newTitle;
    }
    else {
      title = 'Microtalk';
    }
  }
}
