var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return arr instanceof Array;
};
