'use strict';

const getDivisorsCnt = n => {
  let count = 0;
  [...Array(n ** 0.5 + 1).keys()].slice(1).reduce((s, a) => {
    if (!(n % a) && a) count++;
  }, 0);
  return count;
};

const getDivisorsCnt2 = n =>
  [...Array((n / 2) ^ 0)].reduce(
    (pre, _, idx) => (n % ++idx ? pre : ++pre),
    1
  );
