'use strict';
const sum = x => {
  const f = y => sum(x + y);
  f.log = () => console.log(x);
  return f;
};
sum(1)(2)(3).log();
