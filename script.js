// Guessimg game
let num = 7;
let guess = prompt("Please Guess A Number!");

while(guess !== num && guess <= 10){
    if(guess < 7){
        console.log(`${guess} IS TOO LOW!`);
        guess = prompt("Please Guess A Number!");
    } else if(guess > 7){
        console.log(`${guess} IS TOO HIGH`);
    } else {
        alert("YOU GUESSED RIGHT");
    }
}

