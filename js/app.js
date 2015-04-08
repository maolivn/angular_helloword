' use strict';
/* App Module */
var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
]);
helloWorldApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'template/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'template/show.html',
            controller: 'ShowCtrl'
        }).when('/customer', {
            templateUrl: 'template/customer.html',
            controller: 'CustomerCtrl'
        }).when('/addCustomer', {
            templateUrl: 'template/newCustomer.html',
            controller: 'AddCustomerCtrl'
        }).when('/addedCustomer/:customer/:city', {
            templateUrl: 'template/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);