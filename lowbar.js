const _ = {};

_.identity = function (val) {
  // your code here 
  return val; 
};

_.values = function (obj) {
  if(typeof obj !== 'object') return [];
};

module.exports = _;
