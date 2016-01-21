angular.module('app.pages.back-end-load-data')
  .controller('BackEndLoadDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory','$rootScope',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory, $rootScope) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
          ]
        }
      };

      $scope.communicationFactory = communicationFactory;

      $scope.timer = null;
      $scope.loadDataStartTime = null;
      $scope.loadDataEndTime = null;

      var getData = function () {
        communicationFactory.getDataFromBackEnd().then(function(value){
          $scope.loadDataStartTime = new Date();
          $scope.models.dropzones.A = value.data;
        }, function(reason){
          console.log("Wystąpiły błędy podczas pobierania danych");
        });
      };

      getData();

      $scope.$on('$includeContentLoaded', function() {
        $scope.loadDataEndTime = new Date();
        if($scope.loadDataStartTime !== null){
          $scope.timer = ($scope.loadDataEndTime.getTime() - $scope.loadDataStartTime.getTime()) / 1000;
        }
      });

      $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);


      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

    }]);
