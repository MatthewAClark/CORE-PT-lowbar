const _ = {};

_.identity = function (x) {
  // your code here 
  return x;
};

_.values = function (obj) {
  let valsArr = [];
  for (let item in obj) {
    valsArr.push(obj[item]);
  }
  return valsArr;
};

_.first = function (arr, items) {
  if (!items && items != 0) {
    return arr[0];
  } else {
    let newArr = [];
    if (items > arr.length) {
      items = arr.length;
    }
    for (let i = 0; i < items; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

_.last = function (arr, items) {
  if (!items && items != 0) {
    return arr[arr.length - 1];
  } else {
    let newArr = [];
    if (items > arr.length) {
      items = arr.length;
    }
    for (let i = arr.length - items; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

_.each = function (list, iteratee) {
  let newList = [];
  if (list instanceof Array) {
    for (let i = 0; i < list.length; i++) {
      newList.push(iteratee(list[i]));
    }
  } else {
    for (let item in list) {
      newList.push(iteratee(list[item]));
    }
  }
  return newList;
};

_.indexOf = function (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

_.filter = function (arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

_.reject = function (arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

_.uniq = function (arr) {
  let lookupArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (_.indexOf(lookupArr, arr[i]) === -1) {
      lookupArr.push(arr[i]);
    }
  }
  return lookupArr;
};

_.map = function (obj, func) {
  let newArr = [];
  if (obj instanceof Object) {
    for (let item in obj) {
      newArr.push(func(obj[item]));
    }
  }
  return newArr;
};

_.contains = function (arr, find) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) return true;
  }
  return false;
};


module.exports = _;
