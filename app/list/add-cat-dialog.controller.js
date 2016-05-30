(function() {
'use strict';

  angular
    .module('app.list')
    .controller('AddCatDialogController', AddCatDialogController);

  AddCatDialogController.$inject = ['CatsResourceFactory', '$mdDialog'];
  
  function AddCatDialogController(CatsResourceFactory, $mdDialog) {
    var vm = this;
    
    vm.isCreateModal = true;
    vm.form = {
        likes: [],
        dislikes: []
    };
    
    vm.submit = submit;
    vm.cancel = cancel;
    
    function cancel() {
      $mdDialog.cancel();
    }
    
    function submit() {
      CatsResourceFactory.save(vm.form);
      $mdDialog.hide();
    }
  }
})();