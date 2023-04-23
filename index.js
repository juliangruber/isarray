'use strict';

module.exports = Array.isArray || function (arr) {
  return arr && arr.constructor === Array;
};
