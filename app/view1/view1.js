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
    $scope.transactions = [];
    $scope.addTransaction = function () {
        if ($scope.amount) {
            $scope.budget -= $scope.amount;
            $scope.transactions.push({
                amount: $scope.amount * -1,
                description: $scope.description,
                date: new Date()
            });
            $scope.amount = null;
            $scope.description = null;
        }
    };
}]);