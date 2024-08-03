/** Use class syntax to Define a Constructor Function Use getters and setters to Control Access to an Object
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

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
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
const User = createUserClass();
const userOne = new User('shmartayo', 'shmartayo@gmail.com','shmartayo');
const userTwo = new User('Ayokunle', 'kunlexzy4@gmail.com','Hay-Yo');
const userThree = new User('KunleAyo', 'kunlexzy5@gmail.com','Kunlexzy');

console.log(userOne);
console.log(userTwo);
console.log(userThree);


/** Use getters and setters to Control Access to an Object
 * With a class object you often want to obtain values from the
 * object or set a value of a property in an object.
 * These are often called getters and setters
*/

class Book {
  constructor(author){
    this._author = author;
  }

  //getter
  get author(){
    return this._author;
  }

  // setter
  set author(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const book1 = new Book("shmartayo");
console.log(book1._author);
console.log(book1.author);
console.log();


function makeClass(){
  class Thermostat {
    constructor(temp){
      this._temp = 5/9 * (temp - 32);
    }

    get temperature(){
      return this._temp;
    }

    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

