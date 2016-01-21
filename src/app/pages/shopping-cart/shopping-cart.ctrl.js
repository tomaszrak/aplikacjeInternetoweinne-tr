'use strict';

angular.module('app.pages.shopping-cart')
  .controller('ShoppingCartCtrl', ['$scope', 'shoppingFactory',
    function ($scope, shoppingFactory) {

      $scope.shoppingFactory = shoppingFactory;

      $scope.deleteItem = function(item){
        $scope.shoppingFactory.shoppingArray.splice(item, 1);
      };

    }]);



