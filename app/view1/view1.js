'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
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