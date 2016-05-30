(function() {
'use strict';

  angular
    .module('app.list')
    .controller('AddCatDialogController', AddCatDialogController);

  AddCatDialogController.$inject = ['CatsEndpointsFactory', '$mdDialog'];
  
  function AddCatDialogController(CatsEndpointsFactory, $mdDialog) {
    var vm = this;
    
    vm.form = {
      likes: [],
      dislikes: []
    }
    
    vm.submit = submit;

    activate();

    function activate() {
      
    }
    
    function submit() {
      console.log(CatsEndpointsFactory.$save);
      console.log('submit');
      CatsEndpointsFactory.save(vm.form);
      $mdDialog.hide();
    }
  }
})();