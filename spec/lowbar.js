var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
    it('return what you put in', function() {
      expect(_.identity('string')).to.be.equal('string');
      expect(_.identity(true)).to.be.equal(true);
      expect(_.identity(9)).to.be.equal(9);
      expect(_.identity([1,2,3])).to.be.eql([1,2,3]);
      expect(_.identity({x:1, y:2})).to.be.eql({x:1, y:2});
    });
  });
});
