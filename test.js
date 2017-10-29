var isArray = require('./');
var test = require('tape');

var nativeIsArray = Array.isArray;

test('is array (only polyfill)', function(t){
  delete Array.isArray;
  t.ok(isArray([]));
  t.notOk(isArray({}));
  t.notOk(isArray(null));
  t.notOk(isArray(false));
  t.notOk(isArray(""));

  var obj = {};
  obj[0] = true;
  t.notOk(isArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.ok(isArray(arr));

  t.end();
});

test('is array (native)', function(t){
  Array.isArray = nativeIsArray;
  t.ok(isArray([]));
  t.notOk(isArray({}));
  t.notOk(isArray(null));
  t.notOk(isArray(false));
  t.notOk(isArray(""));

  var obj = {};
  obj[0] = true;
  t.notOk(isArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.ok(isArray(arr));

  t.end();
});
