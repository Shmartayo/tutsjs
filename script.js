// Card counting (Black Jack card counting function)
// functionality: when you see a low card the count goes up,
// When you see a high card the card goes down
// And if it a middle value card, the count stays the same
// and then, when the count is positive the player should 
//bet high and when the count is 0 or negative the player 
// should bet low

let count = 0;

const cc = card => {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    let holdbet;
    holdbet = count > 0 ? "hold": "bet";
    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
    

console.log(cc('4'));

// K q J 10 9 8 7 6 5 4 3 2 A