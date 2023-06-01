// collect the money
// determine the no of lines to bet on
// collect the bet amount
// spine the wheel
// check if the user win
// gave the price money if win or take the money if they lost
// play again

const PromptSync = require("prompt-sync")();

// Declaring the Golbal Variables
const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A: 4,
    B: 6,
    C: 3,
    D: 5,
}

const SYMBOL_VALUE = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}


// step: 1 Deposite the Money

const deposite = () => {
while(true) {
    
    const depositeAmount = PromptSync("Enter Your Deposite Amount : ");
    const depositeAmountNum = parseFloat(depositeAmount);

    if(isNaN(depositeAmountNum) || depositeAmount <= 0){
        console.log('Invalid Deposite Amount, Plz Enter a valid Amount ');
    } else {
        return depositeAmountNum;
    }
}
};


// determine the no of line to bet on

const noOfLines = () => {
    while(true) {
        const lines = PromptSync("Enter the No of Lines that You are going to bet on (1-3) : ");
        const NumberofLines = parseFloat(lines);

        if(isNaN(NumberofLines) || NumberofLines <= 0 || NumberofLines > 3) {
            console.log("Invalid No of Lines, Try Again!");
        } else {
            return NumberofLines;
        }
    }
};

// collect the bet amount

const CollectBetAmount = (deposite,Lines) => {
    while(true) {
        const betAmount = PromptSync("Enter the Bet Amount Per Slot : ");
        const NumberBet = parseFloat(betAmount);

        if(isNaN(NumberBet) || NumberBet <= 0 || NumberBet > deposite / Lines) {
            console.log("Invalid Bet, Try Again!");
        } else {
            return NumberBet;
        }
    }
}

// spine the wheel

const spine = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i=0;i < count; i++){
            symbols.push(symbol);
        }
    }

    const reels = [];
    for(let i=0;i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j=0;j < ROWS;j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const seletedSymbol = reelSymbols[randomIndex];
            reels[i].push(seletedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }

    return reels;
}

// transposeing the array

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
}

// printRows in a slot meachine formate

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for(const [i,symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length - 1){
                rowString += " | "
            }
        }
        console.log(rowString);
    }
};

// check if the user win

const getWinnings = (rows,betAmount,lines) => {
    let winnings = 0;

    for(let row=0;row < lines;row++){
        const symbols = rows[row]
        let allSame = true;

        for(let symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if(allSame) {
            winnings += betAmount * SYMBOL_VALUE[symbols[0]]
        }

    }
    return winnings;
}

const game = () => {
    
    let balance = deposite();
    while(true) {
    console.log("you have a balance of $" + balance);
    const lines = noOfLines();
    const betAmount = CollectBetAmount(balance,lines);
    balance -= betAmount * lines
    const reels = spine();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows,betAmount,lines)
    balance += winnings;
    console.log("You Won!, $" + winnings.toString())
    
    if(balance <= 0) {
        console.log('You Run out of MOney dude!, better luck next time.')
        break
    }
    const playAgain = PromptSync("Do you wanna play again, Man? (y/n)")

    if(playAgain != 'y') break;
}
};

game();