'use strict';

angular.module('app.authentication')
    .factory('authenticationFactory', function(){

        var authenticationFactory = {};

        authenticationFactory.loggedUser = null;

        return authenticationFactory;

    });
