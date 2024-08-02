/*    <<<== Use the Rest Operator with Function Parameters==>>>
  The rest operator allows you to create a function that takes
  a variable number of arguments.
  The rest operator is represented by 3 dots(...)
*/

// A function that sums 3 arguments
// const sum = (function() {
//   return function sum(x,y,z) {
//     const args = [x,y,z];
//     return args.reduce((a,b) => a + b, 0);
//   };
// }) ();
// console.log(sum(1,2,3));

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a,b) => a + b, 0);
  };
}) ();
console.log(sum(1,2,3));

/* <<<== Use the Spread Operator to Evaluate Arrays In-Place==>>>
 **The spread operator looks just like the rest operator 
   3dots(...) But it expands an already existing array or
   it spreads out an array.
 * It takes an array and spreads it out to its indivdual
    parts.
 * The spread operator can spread an array into the
   individual elements instead of the actual array.
 * You can only use it in arguments to a function or in an
   array literal
 * In simple terms it is used to copy the comtents of an 
   array into another array to create a look alike array and
   not just duplicating an array.
 *
*/

//Without spread operator
// let arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function(){
//   arr2 = arr1;
//   arr[1] = 'potato';
// }) ();
// console.log(arr2);

//With spread operator
let arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
  arr2 = [...arr1];
  arr1[0] = 'potato';
}) ();
console.log(arr2);





/* Testing how anonymous functions work

#1
let a = 10;
let b = 5;
let c;

(function(){
  c = a - b;
}) ();

console.log(c);

#2
let a = 10;
let b = 5;


let c = (function(){
  return a - b;
}) ();

console.log(c);

*/