'use strict';

describe ('myApp.budget module', function () {

    var scope;
    beforeEach (module ('myApp.budget'));

    beforeEach (inject (function ($controller, $rootScope) {  // inject $rootScope
        scope = $rootScope.$new();
        $controller ("BudgetCtrl", {$scope: scope});
    }));

    describe ('budget controller', function () {

        it ('should reduce the budget by the given amount', function () {
            scope.budget = 1000;
            scope.transactions = [];
            scope.amount = 10;
            scope.description = 'test transaction';
            scope.addTransaction();
            expect(scope.budget).toEqual(990);
            expect(scope.transactions.length).toEqual(1);
            var transaction = scope.transactions[0];
            expect(transaction.amount).toEqual(-10);
            expect(transaction.description).toEqual('test transaction');
            expect(transaction.date - new Date()).toBeLessThan(1000); // date should differ less than 1 second
            expect(scope.amount).toBeNull();
            expect(scope.description).toBeNull();
        });

    });
});