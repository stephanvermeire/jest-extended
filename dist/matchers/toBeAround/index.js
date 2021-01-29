'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _jestMatcherUtils = require('jest-matcher-utils');

var _predicate = require('./predicate');

var _predicate2 = _interopRequireDefault(_predicate);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const passMessage = (actual, expected) => () =>
  (0, _jestMatcherUtils.matcherHint)('.not.toBeAround') + '\n\n' + `expected ${actual} not to be around ${expected}`;

const failMessage = (actual, expected) => () =>
  (0, _jestMatcherUtils.matcherHint)('.toBeAround') + '\n\n' + `expected ${actual} to be around ${expected}`;

exports.default = {
  toBeAround: (actual, expected, precision = 2) => {
    const pass = (0, _predicate2.default)(actual, expected, precision);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
