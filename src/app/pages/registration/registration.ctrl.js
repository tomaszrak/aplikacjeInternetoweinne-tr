angular.module('app.pages.registration')
    .controller('RegistrationCtrl', ['$scope','communicationFactory', 'authenticationFactory','$state','messageCenterService',
        function ($scope, communicationFactory, authenticationFactory, $state, messageCenterService) {

            var userArray = [];

            $scope.registrationData = {
                username: "",
                password: "",
                account_activated: false
            };

            $scope.change = function(username){
                if(communicationFactory.getItem('users')){
                    userArray = communicationFactory.getItem('users');
                    var userExists = _.find(userArray, function(element){
                        return element.username === username;
                    });

                    if(userExists){
                        $scope.registrationForm.username.$setValidity('usernameExists', false);
                    } else {
                        $scope.registrationForm.username.$setValidity('usernameExists', true);
                    }
                }

            };

            $scope.register = function(data, form) {
                if(form.$valid){
                    $scope.registrationData.username = data.username;
                    $scope.registrationData.password = data.password;
                    $scope.registrationData.date = new Date();

                    userArray.push($scope.registrationData);
                  communicationFactory.setValue('users', userArray);
                    $state.go('app.login');
                  messageCenterService.add('success', "Rejestracja zakończyła się sukcesem", { timeout: 5000, status: messageCenterService.status.next });
                }
            };

        }]);
