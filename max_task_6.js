'use strict';
const sum = ( ...num ) => num.reduce((curent, next) => curent + next);
console.log(sum(1,2,3,4,5,6,7,8,9,10)); //55
console.log(sum(10,20,30,40)); //100