'use strict';

angular.module('officePresentsApp.auth', [
  'officePresentsApp.constants',
  'officePresentsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
