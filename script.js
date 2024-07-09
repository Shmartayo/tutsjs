/* Loops - Doing things repeatedly */

//Add the comtemts of am array
const purchases = new Array(19.99,9.50,4.25,28.75,86.20,1.99,104.50,2.85);
function addArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum +=array[i];
    }
    console.log(sum);
}

addArray(purchases);


// let password = 'lol';

// let guess = prompt('Guess the password!');

// while(guess !== password){
//     console.log('Try again!')
//     guess = prompt('Guess the password!');
// }
// console.log('You did it !!');
