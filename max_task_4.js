'use strict';
const createLog = base => x => Math.log(x)/Math.log(base);
const lg = createLog(10);
const ln = createLog(Math.E);
console.log(lg(1000));
console.log(ln(Math.E*Math.E));
console.log(createLog(2)(8));
