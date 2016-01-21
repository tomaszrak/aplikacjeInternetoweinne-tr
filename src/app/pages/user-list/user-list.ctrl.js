angular.module('app.pages.user-list')
    .controller('UserListCtrl', ['$scope','communicationFactory', 'authenticationFactory', '$state',
        function ($scope, communicationFactory, authenticationFactory, $state) {

            if(authenticationFactory.loggedUser !== 'admin'){
                $state.go('app.login');
            }

            $scope.userList = communicationFactory.getItem('users');

            $scope.accountActivate = function(user) {
                var index = $scope.userList.indexOf(user);
                $scope.userList[index].account_activated = true;
              communicationFactory.setValue('users', $scope.userList);
            };

        }]);

