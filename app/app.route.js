(function() {
  'use strict';

  angular
    .module('app')
    .config(config);
    
  function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        abstract: true,
        templateUrl: 'shell.html'
      });
      
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('orange');
      
    $urlRouterProvider.otherwise('cats/');
  }
})();