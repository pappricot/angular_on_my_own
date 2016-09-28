'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

  .when('/home', {
  	templateUrl: 'views/home.html',
  	controller: 'homeCtrl'
  })

  .when('/bio', {
  	templateUrl: 'views/bio.html',
  	controller: 'bioCtrl'
  })

  .when('/faq', {
  	templateUrl: 'views/faq.html',
  	controller: 'faqCtrl'
  })

  .when('/contact', {
  	templateUrl: 'views/contact.html',
  	controller: 'contactCtrl'
  })


  $routeProvider.otherwise({redirectTo: '/bio'});
}]);
