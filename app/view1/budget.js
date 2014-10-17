'use strict';

angular.module('myApp.budget', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/budget', {
    templateUrl: 'view1/budget.html',
    controller: 'BudgetCtrl'
  });
}])

.controller('BudgetCtrl', ['$scope', function($scope) {
    $scope.budget = 800;
    $scope.transactions = [
        {amount: -23.97, description: 'Einkauf', date: new Date()},
        {amount: -10, date: new Date()},
    ];
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