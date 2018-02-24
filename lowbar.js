const _ = {};

_.identity = function (x) {
  // your code here 
  return x;
};

_.values = function(obj) {
  let valsArr = [];
  for (let item in obj) {
    valsArr.push(obj[item]);
  }
  return valsArr;
};

_.first = function(arr, items) {
  if(items) {
    return arr[0];
  } else {
    return [];
  }
};

module.exports = _;
