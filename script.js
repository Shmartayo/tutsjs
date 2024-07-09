// Guessing game

const startGame = () => {
    let targetNum = generateRandom();
    let guess = getInput();
    while(guess !== targetNum) {
        if(guess > targetNum){
            console.log(`${guess} is too high`);
        } else {
            console.log(`${guess} is too low`);
        }
        /* 
            Upwards would run an imfimite loop, to avoid that 
            we meed a mew guess everytime we are loopimg
        */
        guess = parseInt(prompt("Please Guess Again!"));
        while(Number.isNaN(guess)) {
            guess = parseInt(prompt("Enter A  Valid Number!"));
        }
    }
    alert("You Win");
}
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