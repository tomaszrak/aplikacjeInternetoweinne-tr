angular.module('app.pages.local-storage-load-data')
  .controller('LocalStorageLoadDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory','$rootScope',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory, $rootScope) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
          ]
        }
      };

      $scope.czas = null;
      $scope.loadDataStartTime = null;

      function getLocalStorageData(){
        $scope.models.dropzones.A = communicationFactory.getItem('models');
        $scope.loadDataStartTime = new Date();
      };

      getLocalStorageData();

      $scope.$on('$includeContentLoaded', function() {
        communicationFactory.endTime = new Date();
        if($scope.loadDataStartTime !== null){
          $scope.czas = (communicationFactory.endTime.getTime() - $scope.loadDataStartTime.getTime()) / 1000;
        }
      });

      $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);


      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

    }]);
