 'use strict';
 const arr = [
 [1,6,8,-1],
 [0,2,-6,5],
 [0,-5,3,6],
 [9,-1,1,0] ];
const diagonale = inputAray => inputAray.map((array,index) => array[array.length-index-1]);
console.log(diagonale(arr));