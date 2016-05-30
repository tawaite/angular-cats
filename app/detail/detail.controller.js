(function() {
'use strict';

  angular
    .module('app.detail')
    .controller('DetailController', DetailController);

  DetailController.$inject = ['cat', '$mdDialog', '$state'];
  
  function DetailController(cat, $mdDialog, $state) {
    var vm = this;
    
    vm.cat = cat;
    vm.editCatDialog = editCatDialog;
    
    function editCatDialog($event) {
      console.log('editing');
      $mdDialog.show({
        targetEvent: $event,
        clickOutsideToClose: true,
        parent: angular.element(document.body),
        templateUrl: 'cat-dialog.html',
        controller: 'EditCatDialogController',
        controllerAs: 'vm',
        locals: {
          cat: vm.cat
        }
      }).then(function() {
        $state.reload();
      });
    }
  }
})();