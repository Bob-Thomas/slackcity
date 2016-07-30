'use strict';

describe('Service: quotes', function () {

  // load the service's module
  beforeEach(module('slackcityApp'));

  // instantiate service
  var quotes;
  beforeEach(inject(function (_quotes_) {
    quotes = _quotes_;
  }));

  it('should do something', function () {
    expect(!!quotes).toBe(true);
  });

});
