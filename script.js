/* Declare a Read-Only Variable with the const keyword
    Const has all the features of let but it is read-only
    you can not reassign const.
*/

function printManyTimes(str){
    "use strict"

    let sentence = str + " is cool!";
    sentence = str + " is amazing!";

    for (let i = 0; i < str.length; i+=2){
        console.log(sentence);
    }
}

printManyTimes("freeCodeCamp"); // Would work

/*              const 
    It is best practice to use capital letters for a const
    declared variable
*/
function printManyTimes(str){
    "use strict"

    const SENTENCE = str + " is cool!";


    for (let i = 0; i < str.length; i+=2){
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp"); 