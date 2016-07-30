'use strict';

/**
 * @ngdoc overview
 * @name slackcityApp
 * @description
 * # slackcityApp
 *
 * Main module of the application.
 */
angular
  .module('slackcityApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<quote></quote>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
