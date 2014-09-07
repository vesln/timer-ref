var assert = require('assert');
var timers = require('../');
var noop = function() {};

test('Date', function() {
  global.Date = noop;
  assert.notEqual(timers.Date, global.Date);
});

test('setTimeout', function() {
  global.setTimeout = noop;
  assert.notEqual(timers.setTimeout, global.setTimeout);
});

test('clearTimeout', function() {
  global.clearTimeout = noop;
  assert.notEqual(timers.clearTimeout, global.clearTimeout);
});

test('setInterval', function() {
  global.setInterval = noop;
  assert.notEqual(timers.setInterval, global.setInterval);
});

test('clearInterval', function() {
  global.clearInterval = noop;
  assert.notEqual(timers.clearInterval, global.clearInterval);
});
