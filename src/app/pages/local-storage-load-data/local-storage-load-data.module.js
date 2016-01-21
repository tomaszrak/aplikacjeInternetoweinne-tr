angular.module('app.pages.local-storage-load-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.local-storage-load-data', {
          url: '/local-storage-load-data',
          views: {
            'main@': {
              controller: 'LocalStorageLoadDataCtrl',
              templateUrl: '/app/pages/local-storage-load-data/local-storage-load-data.html'
            }
          }
        });

    }]);
