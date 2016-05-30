(function() {
  'use strict';

  angular
    .module('app.list')
    .config(config);
    
  function config($stateProvider) {
    $stateProvider
      .state('root.list', {
        url: 'cats/',
        templateUrl: 'list/list.html',
        controller: 'ListController',
        controllerAs: 'vm',
        resolve: {
          'cats': function(CatsResourceFactory) {
            return CatsResourceFactory.query();
          }
        }
      });
  }
})();