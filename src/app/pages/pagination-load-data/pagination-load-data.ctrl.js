angular.module('app.pages.pagination-load-data')
  .controller('PaginationLoadDataCtrl', ['$scope','communicationFactory', 'authenticationFactory','shoppingFactory','$rootScope','$window',
    function ($scope, communicationFactory, authenticationFactory, shoppingFactory, $rootScope, $window) {

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
      $scope.loadDataEndTime = null;
      $scope.itemsPerPage = 10;

      $scope.addToShoppingCart = function(item){
        shoppingFactory.shoppingArray.push(item);
      };

      var getData = function () {
        communicationFactory.getPartOfData($scope.currentPage, $scope.itemsPerPage).then(function(value){
          $scope.loadDataStartTime = new Date();
          $scope.models.dropzones.A = value.data;
        }, function(reason){
          console.log("Wystąpiły błędy podczas pobierania danych");
        });
      };

      getData();

      $scope.pageChanged = function(pageNumber){
        $scope.currentPage = pageNumber;
        if($scope.itemsPerPage > 0){
          getData();
        } else {
          $scope.models.dropzones.A = [];
        }
      };

      $scope.init = function(){
        $scope.loadDataEndTime = new Date();
        if($scope.loadDataStartTime !== null){
          $scope.timer = ($scope.loadDataEndTime.getTime() - $scope.loadDataStartTime.getTime()) / 1000;
        }
      };

      $scope.setItemsPerPage = function(itemsPerPage){
        $scope.itemsPerPage = itemsPerPage;
      }
    }]);
