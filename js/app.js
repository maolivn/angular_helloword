' use strict';
var blogApp = angular.module('blogApp', ['ngRoute', 'blogControllers']);
blogApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'template/main.html',
        controller: 'BlogCtrl'
    }).when('/blogPost/:id', {
        templateUrl: 'template/blogPost.html',
        controller: 'BlogViewCtrl'
    });
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);