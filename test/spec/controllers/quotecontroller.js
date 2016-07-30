'use strict';

describe('Controller: QuotecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('slackcityApp'));

  var QuotecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuotecontrollerCtrl = $controller('QuotecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuotecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
