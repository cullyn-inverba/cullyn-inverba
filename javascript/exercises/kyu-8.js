'use strict';

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// Apparently eval is not recommended, using switch instead.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

function noSpace(x) {
  return x.replace(/\s+/g, '');
}
