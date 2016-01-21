angular.module('app.pages.back-end-load-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.back-end-load-data', {
          url: '/back-end-load-data',
          views: {
            'main@': {
              controller: 'BackEndLoadDataCtrl',
              templateUrl: '/app/pages/back-end-load-data/back-end-load-data.html'
            }
          }
        });

    }]);
