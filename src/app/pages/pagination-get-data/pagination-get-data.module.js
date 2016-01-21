angular.module('app.pages.pagination-get-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.pagination-get-data', {
          url: '/pagination-get-data',
          views: {
            'main@': {
              controller: 'PaginationGetDataCtrl',
              templateUrl: '/app/pages/pagination-get-data/pagination-get-data.html'
            }
          }
        });

    }]);
