'use strict';
const sqrn = n => x => Math.pow(x, 1/n);
const sqr3 = sqrn(3);
console.log(sqr3(64));
