/** Use class syntax to Define a Constructor Function
 * You can create an object using the class keyword
*/

/* Old way of creating a class
//This is a constructor function - We use it to construct the object

  let SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }

  Old way of creating an object 

  let zeus = new SpaceShuttle('Jupiter');

  console.log(zeus.targetPlanet);

*/

//The class syntax replaces the constructor function creation

class SpaceShuttle {
  constructor(targetPlanet,name){
    this.targetPlanet = targetPlanet;
    this.spaceModel = name;
  }

}

let zeus = new SpaceShuttle('Jupiter','startrek');

console.log(zeus.targetPlanet);
console.log(zeus.spaceModel);

// Build a vegetable class
function makeClass(){
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }

  return Vegetable;
}

const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);


function createUserClass(){
  class User {
    constructor(name, email,username){
      this.name = name,
      this.email = email,
      this.username = username
    }
  }

  return User;
}
const user = createUserClass();
const userOne = new user('shmartayo', 'shmartayo@gmail.com','shmartayo');
const userTwo = new user('Ayokunle', 'kunlexzy4@gmail.com','Hay-Yo');
const userThree = new user('KunleAyo', 'kunlexzy5@gmail.com','Kunlexzy');

console.log(userOne);
console.log(userTwo);
console.log(userThree);
