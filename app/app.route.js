(function() {
  'use strict';

  angular
    .module('app')
    .config(config);
    
  function config($stateProvider, $urlRouterProvider, $mdThemingProvider, $resourceProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        abstract: true,
        templateUrl: 'shell.html'
      });
      
    $urlRouterProvider.otherwise('cats/');
      
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');
      
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }
})();