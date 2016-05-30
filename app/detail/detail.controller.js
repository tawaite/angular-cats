(function() {
'use strict';

  angular
    .module('app.detail')
    .controller('DetailController', DetailController);

  DetailController.$inject = ['$mdDialog', '$state', '$stateParams', 'CatsResourceFactory', 'cat'];
  
  function DetailController($mdDialog, $state, $stateParams, CatsResourceFactory, cat) {
    var vm = this;
    
    vm.cat = cat;
    vm.editCatDialog = editCatDialog;
    vm.adoptCatPrompt = adoptCatPrompt;
    
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