angular.module('app.pages.back-end-get-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.back-end-get-data', {
          url: '/back-end-get-data',
          views: {
            'main@': {
              controller: 'BackEndGetDataCtrl',
              templateUrl: '/app/pages/back-end-get-data/back-end-get-data.html'
            }
          }
        });

    }]);
