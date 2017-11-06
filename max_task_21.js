'use strict';
const arrayOfTypes = [47,'отчислен',6,true,[],false];
const typeParse = arr =>
{
	let usedTypes = [];
	let finish = [];
	arr.forEach(function(item){
		if (usedTypes.indexOf(typeof(item)) != -1)
		{
			finish[usedTypes.indexOf(typeof(item))].push(item);
		}
		else
		{
			usedTypes.push(typeof(item));
			finish.push([]);
			finish[usedTypes.length-1].push(item);
		};
	});
	return finish;
}
console.log(typeParse(arrayOfTypes));