angular.module('cantonAPI', ['cantonAPI.controllers', 'cantonAPI.services', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  //set up UI router for Angular
  $stateProvider

    .state('home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('search', {
      url: '/search',
      views: {
        'home': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/home');
});

