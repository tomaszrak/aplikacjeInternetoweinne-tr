angular.module('app.pages.settings', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider
                .state('app.settings', {
                    url: '/settings',
                    views: {
                        'main@': {
                            controller: 'SettingsCtrl',
                            templateUrl: '/app/pages/settings/settings.html'
                        }
                    }
                });

        }]);
