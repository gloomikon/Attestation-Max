'use strict';
const person = {
  firstName:'John',
  lastName:'Doe',
  age:50,
  eyeColor:'blue'
};
const objectParcer = (inputArray) => {
  let str = '';
  for (let property in inputArray)
  {
    str=str+property+'='+inputArray[property]+'; ';
  }
  return str;}
console.log(objectParcer(person));
