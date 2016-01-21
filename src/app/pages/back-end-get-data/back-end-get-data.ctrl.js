angular.module('app.pages.back-end-get-data')
  .controller('BackEndGetDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
          ]
        }
      };

      $scope.czas = null;

      var getData = function () {
        communicationFactory.getDataFromBackEnd().then(function(value){
          communicationFactory.endTime = new Date();
          if(communicationFactory.startTime !== null){
            $scope.czas = (communicationFactory.endTime.getTime() - communicationFactory.startTime.getTime()) / 1000;
          }
          $scope.models.dropzones.A = value.data;
        }, function(reason){
          console.log("Wystąpiły błędy podczas pobierania danych");
        });
      };

      getData();

      $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);


      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

    }]);
