'use strict';

angular.module('app.pages.main')
  .controller('MainCtrl', ['$scope','communicationFactory','authenticationFactory','shoppingFactory',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
            {
              "type": "item",
              "name": "ASUS H81M-PLUS",
              "price": "239 zł"
            },
            {
              "type": "item",
              "name": "AMD X8 FX-8320",
              "price": "679 zł"
            },
            {
              "type": "item",
              "name": "GIGABYTE GeForce GTX 960 4GB WindForce",
              "price": "970 zł"
            }
          ]
        }
      };

      $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);


      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      }
    }]);



