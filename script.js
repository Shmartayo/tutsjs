/*<<<== Use Destructuring Assignment to Assign Variables from Arrays ==>>>
  We can also use Destructuring assignment to assign 
  variables from Arrays.
*/
var [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x); // The difference between Destructuring from an array and destructuring from objects is that you cannot specify which element of the array is going into a variable, it just goes in order

// However if we want the number 4 and 6 to go into the array

var [z, x, , y, , a] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y, a);

/**
 * You can use the Destructuring of arrays to switch
 * the places  of variables
*/

let a = 8, b = 6;
(() =>{
  "use strict";
  [a, b] = [b, a];
})();
console.log(a,b);