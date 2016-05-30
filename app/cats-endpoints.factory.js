(function() {
'use strict';

  angular
    .module('app')
    .factory('CatsEndpointsFactory', CatsEndpointsFactory);

  CatsEndpointsFactory.$inject = ['$http', '$resource'];
  
  function CatsEndpointsFactory($http, $resource) {
    // var apiUrl = 'http://localhost:9000/api/';
    
    // var exports = {
    //   getAllCats: getAllCats,
    //   cat: $resource(apiUrl + 'cats/:id')
    // };
    
    // return exports;
    
    // function getAllCats() {
    //   return $http.get(apiUrl + 'cats');
    // }
    return $resource('http://localhost:9000/api/cats');
  }
})();