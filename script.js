// Guessing game
const generateRandom = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const getInput = () => {
    let guess = parseInt(prompt('Enter a number'));
    while (Number.isNaN(guess)) {
        guess = parseInt(prompt("Please Enter a Valid Number"));
    }
    return guess;
}

const startGame = () => {
    const targetNum = generateRandom();
    let guess = getInput();
    while(guess !== targetNum) {
        if(guess > targetNum){
            console.log(`${guess} is too high`);
        } else {
            console.log(`${guess} is too low`);
        }
        /* 
            Upwards would run an infinite loop, to avoid that 
            we need a new guess everytime we are looping
        */
        guess = getInput();
    }
    alert("You Win");
}

startGame();



