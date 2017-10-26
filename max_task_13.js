'use strict';
const reverseStr = inputString =>
{
  return inputString.split('').reverse().join('');
}
const reverseStrArray = inputStrArray =>
{
	let reverseStrArray = inputStrArray.map(reverseStr);
  return reverseStrArray;
}
console.log(reverseStrArray(['Bethany Tusen', 'Nikolas Gloom', 'Kolumbia the Professor']));
