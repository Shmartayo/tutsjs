/*
    Generate Random Fractions
    There is a way to create a random decimal number in javaScript
    it is with the Math.random() function
*/

function randomFraction (){
    return Math.random();
}

console.log(randomFraction());

/**
 * Generate random Whole Numbers
*/



function wholeNumFunction (){
    return Math.round(Math.random() * 10);
}

console.log(wholeNumFunction());

let randomNumberBetween0and19 = Math.floor(Math.random()* 20); 

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

/**
 * Generating random numbers within a range
*/
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random()*(ourMax- ourMin + 1)) + ourMin;
}
ourRandomRange(5,15);

