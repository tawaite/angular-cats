(function() {
'use strict';

  angular
    .module('app.list')
    .controller('ListController', ListController);

  ListController.$inject = ['cats', '$mdDialog', '$state'];
  
  function ListController(cats, $mdDialog, $state) {
    var vm = this;
    
    //variables
    vm.cats = cats;
    
    //functions
    vm.showAddCatPrompt = showAddCatPrompt;
    
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