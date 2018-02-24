const path = require('path');
const expect = require('chai').expect;

const _ = require(path.join(__dirname, '..', './lowbar.js'));

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
  describe('#values', function () {
    it('is a function', function() {
      expect(_.values).to.be.a('function');
    });
    it('Returns expected outputs types', function() {
      expect(_.values({})).to.be.an('array');
      expect(_.values({})).to.eql([]);
    });
    it('Returns array of values of the objects own properties', function() {
      expect(_.values({one: 1, two: 2, three: 3})).to.eql([1,2,3]);
    });
  });
  describe.only('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
    it('Returns a number when passed an arr and no second arg', function() {
      expect(_.first([3,2,1])).to.be.an('number');
    });
    it('Returns the number from array of one number', function() {
      expect(_.first([3])).to.equal(3);
    });
    it('returns an array when passed both args', function() {
      expect(_.first([3,2,1], 0)).to.be.an('array');
      expect(_.first([3,2,1], 4)).to.be.an('array');
      expect(_.first([3,2,1], 3)).to.be.an('array');
    });
    it('returns correct number of items in an array', function() {
      expect(_.first([3,2,1], 1)).to.eql([3]);
      expect(_.first([3,2,1], 3)).to.eql([3,2,1]);
      expect(_.first([5,4,3,2,1], 2)).to.eql([5,4]);
    });
    it('returns all items when second argument is greater than arr length', function() {
      expect(_.first([5,4,3,2,1],6)).to.eql([5,4,3,2,1]);
      expect(_.first([5,4,3,2,1],9)).to.eql([5,4,3,2,1]);
    });
  });
});
