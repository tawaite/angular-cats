(function() {
'use strict';

  angular
    .module('app')
    .factory('CatsEndpointsFactory', CatsEndpointsFactory);

  CatsEndpointsFactory.$inject = ['$http'];
  
  function CatsEndpointsFactory($http) {
    var apiUrl = 'http://localhost:9000/api/';
    
    var exports = {
      getCats: getCats
    };
    
    return exports;
    
    function getCats() {
      return $http.get(apiUrl + 'cats');
    }
  }
})();