(function() {
'use strict';

  angular
    .module('app.detail')
    .controller('EditCatDialogController', EditCatDialogController);

  EditCatDialogController.$inject = ['$mdDialog', '$state', '$stateParams', 'CatsResourceFactory', 'cat'];
  
  function EditCatDialogController($mdDialog, $state, $stateParams, CatsResourceFactory, cat) {
    var vm = this;
    
    vm.form = {
      likes: [],
      dislikes: []
    }
    
    vm.submit = submit;
    vm.cancel = cancel;
    
    activate();
    
    function activate() {
      _.assign(vm.form, cat);
      console.log(vm.form);
    }
    
    function cancel() {
      $mdDialog.cancel();
    }
    
    function submit() {
      CatsResourceFactory.update($stateParams, {
        _id: vm.form._id,
        name: vm.form.name,
        age: vm.form.age,
        adoptionFee: vm.form.adoptionFee,
        image: vm.form.image,
        likes: vm.form.likes,
        dislikes: vm.form.dislikes
      });
      $mdDialog.hide();
    }
  }
})();