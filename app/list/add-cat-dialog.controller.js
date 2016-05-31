(function() {
'use strict';

  angular
    .module('app.list')
    .controller('AddCatDialogController', AddCatDialogController);

  AddCatDialogController.$inject = ['CatsResourceFactory', '$mdDialog'];
  
  function AddCatDialogController(CatsResourceFactory, $mdDialog) {
    var vm = this;
    
    vm.isCreateModal = true;
    vm.cat = {
        likes: [],
        dislikes: []
    };
    
    vm.submit = submit;
    vm.cancel = cancel;
    
    function cancel() {
      $mdDialog.cancel();
    }
    
    function submit() {
      vm.loading = true;
      CatsResourceFactory.save(vm.cat, function() {
        $mdDialog.hide();
      });
    }
  }
})();