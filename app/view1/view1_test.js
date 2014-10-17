'use strict';

describe ('myApp.view1 module', function () {

    var scope;
    beforeEach (module ('myApp.view1'));

    beforeEach (inject (function ($controller, $rootScope) {  // inject $rootScope
        scope = $rootScope.$new();
        $controller ("View1Ctrl", {$scope: scope});
    }));

    describe ('view1 controller', function () {

        it ('should reduce the budget by the given amount', function () {
            scope.budget = 1000;
            scope.amount = 10;
            scope.description = 'test transaction';
            scope.addTransaction();
            expect(scope.budget).toEqual(990);
            expect(scope.transactions).toEqual([
                {amount: -10, description: 'test transaction', date: new Date()}
            ]);
            expect(scope.amount).toBeNull();
            expect(scope.description).toBeNull();
        });

    });
});