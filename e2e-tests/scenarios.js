'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /budget when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/budget");
  });


  describe('budget view', function() {

    beforeEach(function() {
      browser.get('index.html#/budget');
    });


    it('should render budget view when user navigates to /budget', function() {
      expect(element.all(by.id('budget')).first().getText()).
        toMatch(/800 €/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[data-ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
