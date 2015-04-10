' use strict';
var blogControllers = angular.module('blogControllers', []);
blogControllers.controller('BlogCtrl',
    ['$scope',
        function BlorCtrl($scope) {
            $scope.blogArticle = 'Blog Test';

        }
    ]);