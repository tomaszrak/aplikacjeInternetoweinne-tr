angular.module('app.pages.settings')
    .controller('SettingsCtrl', ['$scope','communicationFactory', 'authenticationFactory', '$state','messageCenterService',
        function ($scope, communicationFactory, authenticationFactory, $state, messageCenterService) {

            if(authenticationFactory.loggedUser !== 'admin'){
                $state.go('app.login');
            }

            $scope.adminData = {
                newPassword: "",
                confirmNewPassword: ""
            };

            $scope.changePassword = function(form, data){
                if(form.$valid){
                    var usersArray = communicationFactory.getItem('users');
                    var index = _.findIndex(communicationFactory.getItem('users'), function(element){
                        return authenticationFactory.loggedUser === element.username;
                    });
                    usersArray[index].password = data.newPassword;
                  communicationFactory.setValue('users', usersArray);
                  communicationFactory.add('success', "Zmiana hasła zakończyła się sukcesem", { timeout: 5000 });
                    $scope.adminData = {};
                    form.$setPristine();
                    form.$setUntouched();
                }
            };
        }]);

