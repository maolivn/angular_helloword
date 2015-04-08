' use strict';
/* Controllers */
var helloWorldControllers = angular.module('helloWorldControllers', []);
helloWorldControllers
    .controller('MainCtrl',
    ['$scope', '$location', '$http',
        function MainCtrl($scope, $location, $http) {
            $scope.message = "Hello World";
        }])
    .controller('ShowCtrl',
    ['$scope', '$location', '$http',
        function ShowCtrl($scope, $location, $http) {
            $scope.message = "Show The World";
        }])
    .controller('CustomerCtrl',
    ['$scope',
        function CustomerCtrl($scope) {
        $scope.customerName = "Tan Phan";
        $scope.customerNumber = "1234";

        $scope.changeCustomer = function () {
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        }
    }])
    .controller('AddCustomerCtrl',
    ['$scope', '$location',
    function AddCustomerCtrl ($scope, $location){
        $scope.submit = function(){
            $location.path('/addedCustomer/' + $scope.cName + '/' + $scope.cCity)
        }
    }]);