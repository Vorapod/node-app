var sum = require('../sum.js');
var expect = require('chai').expect;

describe('#sum()', function() {

  context('1 + 2 = 3', function() {
    it('should return 3', function() {
      expect(sum(1, 2)).to.equal(3)
    })
  })
})