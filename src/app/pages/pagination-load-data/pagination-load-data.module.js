angular.module('app.pages.pagination-load-data', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      //$urlRouterProvider.otherwise("/main");
      $stateProvider
        .state('app.pagination-load-data', {
          url: '/pagination-load-data',
          views: {
            'main@': {
              controller: 'PaginationLoadDataCtrl',
              templateUrl: '/app/pages/pagination-load-data/pagination-load-data.html'
            }
          }
        });

    }]);
