'use strict';

angular.module('myApp.budget', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/budget', {
    templateUrl: 'view1/budget.html',
    controller: 'BudgetCtrl'
  });
}])

.controller('BudgetCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.budget = 800;

    $http.get('data/transactions.json').success(function(data) {
        $scope.transactions = data;
    });

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