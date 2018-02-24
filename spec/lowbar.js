const path = require('path');
const expect = require('chai').expect;

const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  describe('#identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('return what you put in', function () {
      expect(_.identity('string')).to.be.equal('string');
      expect(_.identity(true)).to.be.equal(true);
      expect(_.identity(9)).to.be.equal(9);
      expect(_.identity([1, 2, 3])).to.be.eql([1, 2, 3]);
      expect(_.identity({ x: 1, y: 2 })).to.be.eql({ x: 1, y: 2 });
    });
  });
  describe('#values', function () {
    it('is a function', function () {
      expect(_.values).to.be.a('function');
    });
    it('Returns expected outputs types', function () {
      expect(_.values({})).to.be.an('array');
      expect(_.values({})).to.eql([]);
    });
    it('Returns array of values of the objects own properties', function () {
      expect(_.values({ one: 1, two: 2, three: 3 })).to.eql([1, 2, 3]);
    });
  });
  describe('#first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('Returns a number when passed an arr and no second arg', function () {
      expect(_.first([3, 2, 1])).to.be.an('number');
    });
    it('Returns the number from array of one number', function () {
      expect(_.first([3])).to.equal(3);
    });
    it('returns an array when passed both args', function () {
      expect(_.first([3, 2, 1], 0)).to.be.an('array');
      expect(_.first([3, 2, 1], 4)).to.be.an('array');
      expect(_.first([3, 2, 1], 3)).to.be.an('array');
    });
    it('returns correct number of items in an array', function () {
      expect(_.first([3, 2, 1], 1)).to.eql([3]);
      expect(_.first([3, 2, 1], 3)).to.eql([3, 2, 1]);
      expect(_.first([5, 4, 3, 2, 1], 2)).to.eql([5, 4]);
    });
    it('returns all items when second argument is greater than arr length', function () {
      expect(_.first([5, 4, 3, 2, 1], 6)).to.eql([5, 4, 3, 2, 1]);
      expect(_.first([5, 4, 3, 2, 1], 9)).to.eql([5, 4, 3, 2, 1]);
    });
  });
  describe('#last', function () {
    it('is a function', function () {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of an array when only an array is passed', function () {
      expect(_.last([3, 2, 1])).to.be.equal(1);
    });
    it('returns an aray when passed both arguments', function () {
      expect(_.last([3, 2, 1], 2)).to.be.eql([2, 1]);
      expect(_.last([3, 2, 1], 3)).to.eql([3, 2, 1]);
      expect(_.last([5, 4, 3, 2, 1], 2)).to.eql([2, 1]);
    });
    it('returns all items when second argument is greater than arr length', function () {
      expect(_.last([5, 4, 3, 2, 1], 6)).to.eql([5, 4, 3, 2, 1]);
      expect(_.last([5, 4, 3, 2, 1], 9)).to.eql([5, 4, 3, 2, 1]);
    });
  });

  function eachTest(x) {
    return x * 2;
  }
  describe('#each', function () {

    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('returns a call on an iteratee with one element array', function () {
      expect(_.each([1], _.identity)).to.be.eql([1]);
    });
    it('returns a call on iteratees with multi element array', function () {
      expect(_.each([1, 2, 3], _.identity)).to.be.eql([1, 2, 3]);
      expect(_.each([4, 5, 6], eachTest)).to.be.eql([8, 10, 12]);
    });
    it('returns a call on iteratees with an object', function () {
      expect(_.each({ a: 1, b: 2, c: 3 }, _.identity)).to.be.eql([1, 2, 3]);
      expect(_.each({ a: 1, b: 2, c: 3 }, eachTest)).to.be.eql([2, 4, 6]);
    });
  });

  describe('#indexOf', function () {

    it('is a function', function () {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns index in one element', function () {
      expect(_.indexOf([1], 1)).to.equal(0);
    });
    it('returns index in third element of array', function () {
      expect(_.indexOf([1, 2, 3, 4], 3)).to.equal(2);
    });
    it('returns -1 if element not found', function () {
      expect(_.indexOf([1, 2, 3, 4], 6)).to.equal(-1);
    });
    
  });
});

describe.only('#filter', function() {
  const truthyFunc = function(x) {return x;};
  const evenFunc = function(x) {return x%2 === 0;};
  it('is a function', function() {
    expect(_.filter).to.be.a('function');
  });
  it('returns an array when passed a blank array', function() {
    expect(_.filter([true,false],truthyFunc)).to.be.an('array');
  });
  it('returns only true values in an array of booleans', function() {
    expect(_.filter([true,false],truthyFunc)).to.eql([true]);
  });
  it('returns an even set of numbers from an arr of mixed nums', function() {
    expect(_.filter([1,2,3,4,5,6], evenFunc)).to.eql([2,4,6]);
  });
});
