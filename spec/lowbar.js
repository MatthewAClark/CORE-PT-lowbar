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
    it('returns a value that is passed into the function', function() {
      expect(_.identity('a')).to.be.equal('a');
    });

    it('returns the same array that is passed into the function', function() {
      expect(_.identity([1, 2, 3])).to.be.eql([1, 2, 3]);
    });

    it('returns the same object that is passed into the function', function() {
      expect(_.identity({a:1, b:2, c:3})).to.be.eql({a:1, b:2, c:3});
    });
  });
});

describe.only('#values', function () {
  it('is a function', function() {
    expect(_.values).to.be.a('function');
  });
  it('returns an empty array when passed a single value', function() {
    expect(_.values(2)).to.be.eql([]);
  });
  it('returns an array with object values when passed an object', function (){
    expect()
  })
});