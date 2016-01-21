angular.module('app.pages.login', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            //$urlRouterProvider.otherwise("/main");
            $stateProvider
                .state('app.login', {
                    url: '/login',
                    views: {
                        'main@': {
                            controller: 'LoginCtrl',
                            templateUrl: '/app/pages/login/login.html'
                        }
                    }
                });

        }]);
