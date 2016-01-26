'use strict';

angular.module('app.pages.main')
  .factory('shoppingFactory', function(){

    var shoppingFactory = {};

    shoppingFactory.shoppingArray = [];

    return shoppingFactory;

  });
