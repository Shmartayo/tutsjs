/*      <<<== Write Higher Order Anonymous Functions ==>>>
  In order to create more flexible functions you can use default
  parameters.
  The default parameter kicks in when the argument is not specified
  /is undefined
*/

const increment = (num, val = 1) => {
  return num + val;
}

console.log(increment(5,2));
console.log(increment(5));

