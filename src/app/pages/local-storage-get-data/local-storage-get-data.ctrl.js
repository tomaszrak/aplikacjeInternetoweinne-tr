angular.module('app.pages.local-storage-get-data')
  .controller('LocalStorageGetDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
          ]
        }
      };

      $scope.czas = null;

      function getLocalStorageData(){
        communicationFactory.endTime = new Date();
        if(communicationFactory.startTime !== null){
          $scope.czas = (communicationFactory.endTime.getTime() - communicationFactory.startTime.getTime()) / 1000;
        }
        $scope.models.dropzones.A = communicationFactory.getItem('models');
      };

      getLocalStorageData();

      $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);


      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

    }]);
