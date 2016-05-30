(function() {
  'use strict';

  angular
    .module('app.detail')
    .config(config);
    
  function config($stateProvider) {
    $stateProvider
      .state('root.detail', {
        url: 'cats/:id',
        templateUrl: 'detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'vm'
      });
  }
})();