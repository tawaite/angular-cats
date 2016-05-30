(function() {
'use strict';

  angular
    .module('app.list')
    .controller('ListController', ListController);

  ListController.$inject = ['$mdDialog', '$state', 'CatsResourceFactory'];
  
  function ListController($mdDialog, $state, CatsResourceFactory) {
    var vm = this;
    
    //functions
    vm.showAddCatPrompt = showAddCatPrompt;
    
    activate();
    
    function activate() {
      vm.loading = true;
      vm.cats = CatsResourceFactory.query(function() {
        vm.loading = false;
      })
    }
    
    function showAddCatPrompt($event) {
      $mdDialog.show({
        targetEvent: $event,
        clickOutsideToClose: true,
        parent: angular.element(document.body),
        templateUrl: 'cat-dialog.html',
        controller: 'AddCatDialogController',
        controllerAs: 'vm'
      }).then(function() {
        $state.reload();
      });
    }
  }
})();