'use strict';

var arrayObjectStringTag = '[object Array]';
var toString = Object.prototype.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) === arrayObjectStringTag;
};
