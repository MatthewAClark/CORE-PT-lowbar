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
  describe.only('#values', function () {
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
  describe('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
    it('Returns expected outputs types', function() {
      //expect(_.first([3,2,1],0)).to.be.an('array');
      expect(_.first([3,2,1])).to.be.an('number');
      //expect(_.first([3,2,1],0)).to.eql([]);
    });
    it('returns a number of first array item when no second arg passed', function() {
      //expect(_.first([3,4,5])).to.eql(3);
      //expect(_.first([5,4,3,2,1])).to.eql(5);
    });
    it('Returns array of first of the objects own properties', function() {
      //expect(_.first({one: 1, two: 2, three: 3})).to.eql([1,2,3]);
    });
  });
});
