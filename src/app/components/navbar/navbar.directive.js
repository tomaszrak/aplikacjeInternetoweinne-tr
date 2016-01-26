'use strict';

angular.module('app.navbar')
  .directive('navbar', function () {
    var controller = ['$scope', 'authenticationFactory', '$state', 'shoppingFactory','communicationFactory',
      function ($scope, authenticationFactory, $state, shoppingFactory, communicationFactory) {

        $scope.authenticationFactory = authenticationFactory;
        $scope.shoppingFactory = shoppingFactory;

        $scope.logout = function(){
          $scope.authenticationFactory.loggedUser = null;
          $state.go('app.login');
        };

        $scope.clickTime = function(){
          communicationFactory.startTime = new Date();
        };

      }];

    return {
      restrict: 'EA',
      controller: controller,
      templateUrl: 'app/components/navbar/navbar.html'
    };
  });
