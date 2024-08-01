/* 
    *Use Arrow functions to write concise Anonymous Functions 
*/

let magic = function() { // Anonymous functions don't have names
    return new Date();
}

magic();

let magicDate = () => {
    return new Date();
}

const magiDate = () => new Date();
magiDate();

//Write arrow functions with parameters
const nameCaller = (firstName) => ` Hello ${firstName}!`;
nameCaller("shmartayo");

let myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

/*      <<<== Write Higher Order Arrow Functions ==>>>
   * Arrow Functions work well with higher order functions
     such as map(), filter() and reduce().
   * Higher order functions take other functions as arguments
     for processing collections of data.
   * Whenever one function takes another function as an 
     argument that is a good time for an arrow function.
   *
*/

/*  Write a function that takes in an array and filters it
    that only integers are in it and it returns the square of
    the integer values
*/

const realNumberArray = new Array(4,5.6,-9.8,3.14,42,6,8.34,-2);

const squareList = arr => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/*      <<<== Write Higher Order Anonymous Functions ==>>>

*/
