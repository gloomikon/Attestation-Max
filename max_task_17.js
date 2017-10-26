'use strict';
const person = {
  firstName:'John',
  lastName:'Doe',
  age:50,
  eyeColor:'blue'
};
function objectParcer(inputArray)
{
  let str = '';
  for (let property in inputArray)
  {
    str=str+property+'='+inputArray[property]+'; ';
  }
  return str;
}
const objectParcerL = (inputArray) => {
  let str = '';
  for (let property in inputArray)
  {
    str=str+property+'='+inputArray[property]+'; ';
  }
  return str;}
console.log(objectParcer(person));
console.log(objectParcerL(person));