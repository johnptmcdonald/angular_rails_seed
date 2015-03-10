var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',
    {
      controller: 'FirstController',
      templateUrl: '/templates/main.html'
    })
  .otherwise(
    {
      templateUrl: '/404.html'
    });
  $locationProvider.html5Mode(true)
});

app.controller('FirstController', function($scope){
  console.log('FirstController is loading');


});