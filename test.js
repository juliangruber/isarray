var nativeIsArray = Array.isArray;
delete Array.isArray;
var isArray = require('./');
Array.isArray = nativeIsArray;

var test = require('tape');

test('is array', function(t){
  t.ok(isArray([]));
  t.notOk(isArray({}));
  t.notOk(isArray(null));
  t.notOk(isArray(false));

  var obj = {};
  obj[0] = true;
  t.notOk(isArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.ok(isArray(arr));

  t.end();
});

