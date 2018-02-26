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
    it('returns -1 when passed an empty array', function () {
      expect(_.indexOf([], 6)).to.equal(-1);
    });
  });
});

describe('#filter', function () {
  const truthyFunc = function (x) { return x; };
  const evenFunc = function (x) { return x % 2 === 0; };
  it('is a function', function () {
    expect(_.filter).to.be.a('function');
  });
  it('returns an array when passed a blank array', function () {
    expect(_.filter([true, false], truthyFunc)).to.be.an('array');
  });
  it('returns only true values in an array of booleans', function () {
    expect(_.filter([true, false], truthyFunc)).to.eql([true]);
  });
  it('returns an even set of numbers from an arr of mixed nums', function () {
    expect(_.filter([1, 2, 3, 4, 5, 6], evenFunc)).to.eql([2, 4, 6]);
  });
});

describe('#reject', function () {
  const truthyFunc = function (x) { return x; };
  const evenFunc = function (x) { return x % 2 === 0; };
  it('is a function', function () {
    expect(_.reject).to.be.a('function');
  });
  it('returns an array when passed a blank array', function () {
    expect(_.reject([true, false], truthyFunc)).to.be.an('array');
  });
  it('returns only true values in an array of booleans', function () {
    expect(_.reject([true, false], truthyFunc)).to.eql([false]);
  });
  it('returns an even set of numbers from an arr of mixed nums', function () {
    expect(_.reject([1, 2, 3, 4, 5, 6], evenFunc)).to.eql([1, 3, 5]);
  });
});

describe('#uniq', function () {
  it('is a function', function () {
    expect(_.uniq).to.be.a('function');
  });
  it('returns an array', function () {
    expect(_.uniq([])).to.be.an('array');
  });
  it('returns an eql array if all items are unique', function () {
    expect(_.uniq([1])).to.eql([1]);
    expect(_.uniq([11, 7])).to.eql([11, 7]);
  });
  it('returns an array if all only unique items', function () {
    expect(_.uniq([1, 2, 5, 2, 1, 3, 4, 5, 2])).to.eql([1, 2, 5, 3, 4]);
    expect(_.uniq([11, 7, 11, 12, 7])).to.eql([11, 7, 12]);
  });
});

const mapFunc = function (x) { return x * 2; };
describe('#map', function () {
  it('is a function', function () {
    expect(_.map).to.be.a('function');
  });
  it('returns same array that is passed into function', function () {
    expect(_.map([1, 2, 3], _.identity)).to.be.eql([1, 2, 3]);
  });
  it('returns new array with result of a manipulating function', function () {
    expect(_.map([1, 2, 3], mapFunc)).to.be.eql([2, 4, 6]);
  });
  it('returns an array when passed an object', function () {
    expect(_.map({ a: 1, b: 2, c: 3 }, mapFunc)).to.be.eql([2, 4, 6]);
  });
});

describe('#contains', function () {
  it('is a function', function () {
    expect(_.contains).to.be.a('function');
  });
  it('Returns true/false when passed one array element that matches/not matching', function () {
    expect(_.contains([1], 1)).to.be.equal(true);
    expect(_.contains([1], 2)).to.be.equal(false);
  });
  it('returns matches on array with one matching element', function () {
    expect(_.contains([1, 2, 3], 1)).to.be.equal(true);
    expect(_.contains([1, 3, 4], 2)).to.be.equal(false);
  });
  it('returns matches on objects with one matching value', function () {
    expect(_.contains({ a: 1, b: 2, c: 3 }, 1)).to.be.equal(true);
    expect(_.contains({ a: 1, b: 3, c: 4 }, 2)).to.be.equal(false);
  });

});

describe('#pluck', function () {
  it('is a function', function () {
    expect(_.pluck).to.be.a('function');
  });
  it('returns a property from one object', function () {
    expect(_.pluck([{ name: 'Peter', age: 42 }], 'name')).to.be.eql(['Peter']);
  });
  it('returns an array of property items from an array of objects', function () {
    expect(_.pluck([{ name: 'Peter', age: 42 }, { name: 'Susan', age: 56 }, { name: 'Terry', age: 45 }], 'name')).to.be.eql(['Peter', 'Susan', 'Terry']);
  });
});

describe.only('#reduce', function () {
  it('is a function', function () {
    expect(_.reduce).to.be.a('function');
  });
  it('Returns same value if only one passed into function', function () {
    expect(_.reduce([1])).to.be.equal(1);
  });
  it('Adds two values together when passed adding function with 2 element array', function () {
    expect(_.reduce([1, 2], function (memo, num) { return memo + num; })).to.be.equal(3);
  });
  it('Adds three or more values together when passed adding function with 2 element array', function () {
    expect(_.reduce([1, 2, 3], function (memo, num) { return memo + num; })).to.be.equal(6);
    expect(_.reduce([1, 2, 3, 7, 8, 9], function (memo, num) { return memo + num; })).to.be.equal(30);
  });
  it('Add memo to the function', function () {
    expect(_.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0)).to.be.equal(6);
    expect(_.reduce([1, 2, 3, 7, 8, 9], function (memo, num) { return memo + num; }, 3)).to.be.equal(33);
  });
  it('Try a different function', function () {
    expect(_.reduce([2, 4, 6], function (memo, num) { return memo * num; }, 0)).to.be.equal(0);
    expect(_.reduce([1, 2, 3, 7, 8, 9], function (memo, num) { return memo * num; }, 3)).to.be.equal(9072);
  });
});

describe('#every', function () {
  it('is a function', function () {
    expect(_.every).to.be.a('function');
  });
  it('returns true when passed one array element and a simple function', function () {
    expect(_.every([true], function() { return true;})).to.be.equal(true);
  });
  it('returns true or false when passed a boolean 1 element array', function () {
    expect(_.every([true], function(num) { return num;})).to.be.equal(true);
    expect(_.every([false], function(num) { return num;})).to.be.equal(false);
  });
  it('returns true if one element in a 3 element array is true', function () {
    expect(_.every([true, true, true], function(num) { return num;})).to.be.equal(true);
    expect(_.every([true, true, false], function(num) { return num;})).to.be.equal(false);
  });
  it('returns true or false on a mathematical function', function () {
    expect(_.every([2, 4, 5], function(num) { return num % 2 == 0;})).to.be.equal(false);
    expect(_.every([2, 4, 6], function(num) { return num % 2 == 0;})).to.be.equal(true);
  });
});

describe('#some', function () {
  it('is a function', function () {
    expect(_.some).to.be.a('function');
  });
  it('returns true when passed one array element and a simple function', function () {
    expect(_.some([true], function() { return true;})).to.equal(true);
  });
  it('returns true or false when passed a boolean 1 element array', function () {
    expect(_.some([true], function(num) { return num;})).to.equal(true);
    expect(_.some([false], function(num) { return num;})).to.equal(false);
  });
  it('returns true if any element in a 3 element array is true', function () {
    expect(_.some([true, true, true], function(num) { return num;})).to.equal(true);
    expect(_.some([true, true, false], function(num) { return num;})).to.equal(true);
    expect(_.some([false, true, false], function(num) { return num;})).to.equal(true);
  });
  it('returns false if all elements in a 3 element array is false', function () {
    expect(_.some([false, false, false], function(num) { return num;})).to.equal(false);
  });
  it('returns true or false on a mathematical function', function () {
    expect(_.some([2, 4, 5], function(num) { return num % 2 === 0;})).to.equal(true);
    expect(_.some([3, 5, 9], function(num) { return num % 2 === 0;})).to.equal(false);
  });
});
