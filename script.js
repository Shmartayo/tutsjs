// A function that returns the largest number in an array

const scores = new Array(96,99,97,92,90);

const maxArray = (array) => {
    let x;
    let val = array[0];

    for(num of array){
        x = num;
        if (x >= val){
            val = x;
        }
    }
    return val;
}

maxArray(scores);


let myStr = `I am a "double quoted" string inside "double quotes"`;
console.log(myStr);

// let ourStr = "I come first. " + "I come second";
// console.log(ourStr);

let ourName = "freeCodeCamp";
let ourStr = "Hello, our name is " + ourName + ", how are you ?";

console.log(ourStr);


const wordBlanks = (myNoun, myAdjective, myVerb, myAdverb) => {
    let result = "";
    result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`;
    return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));
