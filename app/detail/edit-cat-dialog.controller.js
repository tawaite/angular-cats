(function() {
'use strict';

  angular
    .module('app.detail')
    .controller('EditCatDialogController', EditCatDialogController);

  EditCatDialogController.$inject = ['$mdDialog', '$state', '$stateParams', 'CatsResourceFactory', 'cat'];
  
  function EditCatDialogController($mdDialog, $state, $stateParams, CatsResourceFactory, cat) {
    var vm = this;
    
    vm.cat = {
      likes: [],
      dislikes: []
    };
    
    vm.submit = submit;
    vm.cancel = cancel;
    
    activate();
    
    function activate() {
      _.assign(vm.cat, cat);
      console.log(vm.cat);
    }
    
    function cancel() {
      $mdDialog.cancel();
    }
    
    function submit() {
      vm.loading = true;
      CatsResourceFactory.update($stateParams, {
        _id: vm.cat._id,
        name: vm.cat.name,
        age: vm.cat.age,
        adoptionFee: vm.cat.adoptionFee,
        image: vm.cat.image,
        likes: vm.cat.likes,
        dislikes: vm.cat.dislikes
      }, function() {
        $mdDialog.hide();
      });
    }
  }
})();