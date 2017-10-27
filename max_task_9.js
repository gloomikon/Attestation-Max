'use strict';
const Fib = n =>
{
  let previousN = 0;
  let presentN = 1;
  for (let i=0;i<n;i++)
  {
    let newN = previousN + presentN;
    previousN = presentN;
    presentN = newN;
  }
  return previousN;
}
for (let n=1;n<10;n++)
{
  console.log(Fib(n)); //1 1 2 3 5 8 13 21 34
}