'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = (actual, expected, precision) => Math.abs(expected - actual) < Math.pow(10, -precision) / 2;
