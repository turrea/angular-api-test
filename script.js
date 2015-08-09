// Code goes here

(function(){
  'use strict';
  
  angular
    .module('demoApp', ['articles', 'infinite-scroll'])
    .controller('ArticlesController', ArticlesController);

    function ArticlesController(Articles) {
      var vm = this;
      vm.articles = [];
      vm.params = {
        offset: 0,
        limit: 20
      };
      vm.getArticles = getArticles;
      vm.onlyPositiveNumbers = /^(\d)+$/;
      vm.loading = false;

      function getArticles() {
        if(vm.loading) {
          return;
        }

        vm.loading = true;

        Articles.get(vm.params).$promise.then(function(data) {
          vm.articles = vm.articles.concat(data.news);
          
          //increment offset and limit
          vm.params.offset += vm.params.limit;
          vm.loading = false;
        });
      }
    }
    ArticlesController.$inject = ['Articles']

})();