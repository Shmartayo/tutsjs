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
