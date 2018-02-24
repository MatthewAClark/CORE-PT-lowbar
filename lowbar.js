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


module.exports = _;
