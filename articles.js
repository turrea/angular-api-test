(function() {
  'use strict';

  angular.module('articles', ['ngResource'])
  	.constant('ARTICLES_API_URL', 'http://www.stellarbiotechnologies.com/media/press-releases/json')
  	.factory('Articles', Articles);

  function Articles($resource, ARTICLES_API_URL) {
    var articlesResource = $resource(ARTICLES_API_URL);
    return articlesResource;
  }

  Articles.$inject = ['$resource', 'ARTICLES_API_URL'];

})();