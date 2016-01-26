angular.module('app.pages.registration', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            //$urlRouterProvider.otherwise("/main");
            $stateProvider
                .state('app.registration', {
                    url: '/registration',
                    views: {
                        'main@': {
                            controller: 'RegistrationCtrl',
                            templateUrl: '/app/pages/registration/registration.html'
                        }
                    }
                });

        }]);
