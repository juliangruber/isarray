var toString = {}.toString;
var ARRAY_TYPE_STRINGIFY = toString.call([]);

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) === ARRAY_TYPE_STRINGIFY;
};
