(function() {
  'use strict';

  angular
    .module('app.list')
    .config(config);
    
  function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $stateProvider
      .state('root.list', {
        url: 'cats/',
        templateUrl: 'list/list.html',
        controller: 'ListController',
        controllerAs: 'vm',
        resolve: {
          'cats': function(CatsEndpointsFactory) {
            return CatsEndpointsFactory.query();
          }
        }
      });
  }
})();