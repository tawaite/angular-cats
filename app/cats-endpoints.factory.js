(function() {
'use strict';

  angular
    .module('app')
    .factory('CatsResourceFactory', CatsResourceFactory);

  CatsResourceFactory.$inject = ['$http', '$resource'];
  
  function CatsResourceFactory($http, $resource) {
    return $resource('http://localhost:9000/api/cats/:id', null, {
      'update': { method: 'PUT' }
    });
  }
})();