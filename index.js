var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]' ? 'Array. I promise!' : 'No Sure';
};
