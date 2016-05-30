(function() {
'use strict';

  angular
    .module('app.detail')
    .controller('DetailController', DetailController);

  DetailController.$inject = ['$mdDialog', '$state', '$stateParams', 'CatsResourceFactory'];
  
  function DetailController($mdDialog, $state, $stateParams, CatsResourceFactory) {
    var vm = this;
    
    vm.editCatDialog = editCatDialog;
    vm.adoptCatPrompt = adoptCatPrompt;
    
    activate();
    
    function activate() {
      vm.loading = true;
      vm.cat = CatsResourceFactory.get($stateParams, function() {
        vm.loading = false;
      });
    }
    
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
    
    function adoptCatPrompt(ev) {
      console.log('yeah adoptions!');
      var confirm = $mdDialog.confirm()
        .title('Are you ready to adopt the cat?')
        .textContent('This will remove them from the adoption list.')
        .targetEvent(ev)
        .ok('Adopt now')
        .cancel('Cancel');
        
        console.log()
        
      $mdDialog.show(confirm).then(function() {
        CatsResourceFactory.delete($stateParams, function() {
          $state.go('root.list');
        });
      });
    }
  }
})();