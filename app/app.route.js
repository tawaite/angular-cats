(function() {
  'use strict';

  angular
    .module('app')
    .config(config);
    
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        // abstract: true,
        templateUrl: 'shell.html'
      });
      
    $urlRouterProvider.otherwise('/');
  }
})();