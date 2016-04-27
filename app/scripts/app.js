'use strict';

/**
 * @ngdoc overview
 * @name angularServiceApp
 * @description
 * # angularServiceApp
 *
 * Main module of the application.
 */
angular
  .module('angularServiceApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/invoice1', {
        templateUrl: 'views/indexCurr.html',
        controller: 'InvoiceController',
        controllerAs: 'invoice'
      })     
      .otherwise({
        redirectTo: '/'
      });
  });
