/*<<<== Use Destructuring Assignment to pass an Object 
  as a Function's Parameters ==>>>
  This is commonly used with API calls when you are getting
  information from an API request, you can use Destructuring
  to get the elements you want.
  
*/
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {

  return function half({max, min}) {
    return (max + min) / 2.0
  };

})();
console.log(stats);
console.log(half(stats));

//Previous way to pass an object into a function - but this method passes all the elements inside a function
// const halfs = (function(){
//   return function half(stats){
//     return (stats.max + stats.min) /2.0;
//   }
// }) ();