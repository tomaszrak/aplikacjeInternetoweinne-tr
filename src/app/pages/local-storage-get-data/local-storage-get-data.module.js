angular.module('app.pages.local-storage-get-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.local-storage-get-data', {
          url: '/local-storage-get-data',
          views: {
            'main@': {
              controller: 'LocalStorageGetDataCtrl',
              templateUrl: '/app/pages/local-storage-get-data/local-storage-get-data.html'
            }
          }
        });
    }]);
