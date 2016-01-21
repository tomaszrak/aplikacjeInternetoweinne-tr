angular.module('app.pages.user-list', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider
                .state('app.user-list', {
                    url: '/user-list',
                    views: {
                        'main@': {
                            controller: 'UserListCtrl',
                            templateUrl: '/app/pages/user-list/user-list.html'
                        }
                    }
                });

        }]);
