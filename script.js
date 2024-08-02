/*  <<<== Use Destructuring Assignment to Assign Variables
  from Objects ==>>>
  This is a special synthax for neatly assigning values taken
  from an object to a variable.
*/
let voxel = {x:3.6, y:7.4,z:6.54};
/** Previous way of assigning a variable
 * let a = voxel.x;
 * let b = voxel.y;
 * let c = voxel.z;
 */
const {x:a, y:b, z:c} = voxel;
console.log(a);

let person = {
  name: "Ayo",
  Age: 24,
  isSingle : true
}

const {name:firstname, Age: Age, isSingle:isSingle} = person;
console.log(firstname);

/**
 * Coding challenge 
 * 
*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

// function getTempOfTmrw(avgTemperatures) {
//   "use strict";

//   const {today:today, tomorrow:tomorrow} = AVG_TEMPERATURES;
//   const tempOfTomorrow = tomorrow;
//   return tempOfTomorrow;
// }
function getTempOfTmrw(avgTemperatures){
  "use strict";

  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));