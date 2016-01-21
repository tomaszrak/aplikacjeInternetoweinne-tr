'use strict';

var app = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'MessageCenterModule',
  'ngResource',
  'ngSanitize',
  'LocalStorageModule',
  'dndLists',
  'angularUtils.directives.dirPagination',
  'app.communication',
  'app.authentication',
  'app.pages.main',
  'app.navbar',
  'app.pages.login',
  'app.pages.registration',
  'app.pages.settings',
  'app.pages.user-list',
  'app.pages.shopping-cart',
  'app.pages.back-end-get-data',
  'app.pages.back-end-load-data',
  'app.pages.local-storage-get-data',
  'app.pages.local-storage-load-data',
  'app.pages.pagination-get-data',
  'app.pages.pagination-load-data'
]);

app.config(['$stateProvider', '$urlRouterProvider','paginationTemplateProvider',
  function ($stateProvider, $urlRouterProvider, paginationTemplateProvider) {
    $stateProvider
      .state('app', {
        url: '',
        abstract:true
      });
    paginationTemplateProvider.setPath('/bower_components/angular-utils-pagination/dirPagination.tpl.html');
  }]);
