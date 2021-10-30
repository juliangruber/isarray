module.exports = Array.isArray || function (arr) {
  return Object.toString.call(arr) === '[object Array]';
};
