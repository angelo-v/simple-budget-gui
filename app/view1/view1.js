'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.budget = 800;
    $scope.addTransaction = function () {
        if ($scope.amount) {
            $scope.budget -= $scope.amount;
            $scope.amount = null;
        }
    };
}]);