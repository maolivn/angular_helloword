' use strict';
var blogApp = angular.module('blogApp', ['ngRoute', 'blogControllers']);
blogApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'template/main.html',
        controller: 'BlogCtrl'
    });
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);