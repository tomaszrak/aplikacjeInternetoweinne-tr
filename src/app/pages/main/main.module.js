'use strict';

angular.module('app.pages.main', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.main', {
          url: '/main',
          views: {
            'main@': {
              templateUrl : '/app/pages/main/main.html',
              controller : 'MainCtrl'
            }
          }
        });
    }]);
