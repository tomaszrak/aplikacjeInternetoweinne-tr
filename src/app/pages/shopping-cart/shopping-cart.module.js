'use strict';

angular.module('app.pages.shopping-cart', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.shopping-cart', {
          url: '/shopping-cart',
          views: {
            'main@': {
              templateUrl : '/app/pages/shopping-cart/shopping-cart.html',
              controller : 'ShoppingCartCtrl'
            }
          }
        });
    }]);
