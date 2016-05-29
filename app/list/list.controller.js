(function() {
'use strict';

  angular
    .module('app.list')
    .controller('ListController', ListController);

  ListController.$inject = ['cats'];
  
  function ListController(cats) {
    var vm = this;
    
    vm.cats = cats;
    
    activate();

    function activate() {
      console.log('ListController activated');
    }
  }
})();