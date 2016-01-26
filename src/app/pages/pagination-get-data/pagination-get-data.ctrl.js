angular.module('app.pages.pagination-get-data')
  .controller('PaginationGetDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory) {

      $scope.models = {
        selected: null,
        dropzones: {
          "A": [
          ]
        }
      };

      $scope.communicationFactory = communicationFactory;

      $scope.totalItems = 2000;
      $scope.currentPage = 1;
      $scope.timer = null;
      $scope.loadDataStartTime = null;
      $scope.itemsPerPage = 10;

      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

      var getData = function () {
        communicationFactory.getPartOfData($scope.currentPage, $scope.itemsPerPage).then(function(value){
          communicationFactory.endTime = new Date();
          if($scope.loadDataStartTime !== null){
            $scope.timer = (communicationFactory.endTime.getTime() - $scope.loadDataStartTime.getTime()) / 1000;
          }
          $scope.models.dropzones.A = value.data;
        }, function(reason){
          console.log("Wystąpiły błędy podczas pobierania danych");
        });
      };

      getData();

      $scope.pageChanged = function(pageNumber){
        $scope.loadDataStartTime = new Date();
        $scope.currentPage = pageNumber;
        if($scope.itemsPerPage > 0){
          getData();
        } else {
          $scope.models.dropzones.A = [];
        }
      };

      $scope.setItemsPerPage = function(itemsPerPage){
        $scope.itemsPerPage = itemsPerPage;
      }

    }]);
