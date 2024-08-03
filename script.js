/** Write concise Declarative Functions
 * An object can contain a function
*/

// const bicycle = {
//   gear: 2,
//   // This is the long way to put a functio inside an object
//   setGear: function(newGear){
//     "use strict";
//     this.gear = newGear;
//   }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// This is the modern way of writing a function inside an object
const bicycle = {
  gear: 2,
  // This is the long way to put a functio inside an object
  setGear(newGear){
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);