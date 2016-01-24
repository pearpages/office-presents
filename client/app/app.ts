'use strict';

angular.module('officePresentsApp', [
  'officePresentsApp.auth',
  'officePresentsApp.admin',
  'officePresentsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
