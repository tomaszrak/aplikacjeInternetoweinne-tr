angular.module('app.pages.login')
    .controller('LoginCtrl', ['$scope','communicationFactory', '$state','authenticationFactory','messageCenterService',
        function ($scope, communicationFactory, $state, authenticationFactory, messageCenterService) {

            $scope.loggedUserData = null;
            var value = null;

            $scope.login = function(data, form) {
                if(form.$valid) {
                    $scope.loggedUserData = communicationFactory.getItem('users');

                    value = _.find($scope.loggedUserData, function (element) {
                        return (element.username === data.username && element.password === data.password);
                    });
                    if (value) {
                        if(value.account_activated === true){
                            authenticationFactory.loggedUser = value.username;
                            if(authenticationFactory.loggedUser === 'admin'){
                                $state.go('app.main');
                            } else {
                                //$state.go('app.content');
                                $state.go('app.main');
                            }

                            messageCenterService.add('success', "Poprawnie zalogowano", { timeout: 5000, status: messageCenterService.status.next });
                        } else {
                            messageCenterService.add('warning', "Twoje konto nie zostało jeszcze aktywowane", { timeout: 5000 });
                        }

                    } else {
                        messageCenterService.add('danger', "Niepoprawny login lub hasło", { timeout: 5000 });
                    }
                }
                };

        }]);
