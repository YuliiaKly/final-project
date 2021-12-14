//Grab some HTML elements
const popup_rules  = document.getElementById('popup_rules');    
const rulesButton  = document.getElementById("rulesButton");
const rulesClose =  document.getElementById("rulesClose");
const howToPlay  = document.getElementById('howToPlay');    
const howToPlayButton  = document.getElementById("howToPlayButton");
const howToPlayClose =  document.getElementById("howToPlayClose");
const howWin = document.getElementById('winner');
const output = document.getElementById('output');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
let buttonRoll =  document.getElementById('button-roll');
let player1Round = document.getElementById('player1Round');
let computerRound = document.getElementById('computerRound');
const imWin = '<img src="images/win.png" alt="win"></img>'
const imLose = '<img src="images/lose.png" alt="lose"></img>'

//Player and computer dice variables
let player1RoundTotal;
let computerRoundTotal;
let player1Total = 0;
let computerTotal = 0;
const images = 6;
let rollCount = 0;
let dice = [];


// Define the class
class Dice {
    constructor(value) {
        this.value = value;
    }
    describeSelf() {
        return `images/${this.value}_dot_dice.png`
    }
}

// Random image
function rollDice() {
    const randValue = Math.floor(Math.random() * 6) + 1;
    return randValue;
}

/*test
const rollDie =  new Dice(rollDice());
output1.innerHTML += `<p><img src=${rollDie.describeSelf()}></p>`;*/

// Calculate round score
function countRoundScore( FirstD, SecondD ) {
    if ( FirstD == 1 || SecondD == 1) {
        return roundScore = 0;
    } else {
        if ( FirstD == SecondD ) {
        return roundScore = 2 * ( FirstD + SecondD );
    } else {
        return roundScore = FirstD + SecondD;
        }
    }       }

//Generate dice roll
function rollTheDice() {

    let dicePlayer1 = rollDice();
    let dicePlayer2 = rollDice();
    let diceComp1 = rollDice();
    let diceComp2 = rollDice();

    dice1.setAttribute('src', new Dice(dicePlayer1).describeSelf());
    dice2.setAttribute('src', new Dice(dicePlayer2).describeSelf());
    dice3.setAttribute('src', new Dice(diceComp1).describeSelf());
    dice4.setAttribute('src', new Dice(diceComp2).describeSelf());

    player1RoundTotal = countRoundScore( dicePlayer1, dicePlayer2);
    computerRoundTotal = countRoundScore( diceComp1, diceComp2);
    return (player1RoundTotal, computerRoundTotal);
}


//Function to track the round 
function roundTracker() {
    
    if (rollCount == 3 ) {
         if ( player1Total > computerTotal ) {
            howWin.innerHTML = `You are winning  ${player1Total} to ${computerTotal}. </br> ${imWin}`;
        } else if ( player1Total < computerTotal ) {
            howWin.innerHTML += `You are losing ${player1Total} to ${computerTotal}. </br> ${imLose}`;

        } else {
            howWin.innerHTML += `You are tied! Both ${player1Total}.`;
        }
    document.getElementById('popUp').hidden = false;
    }
}

//Count round total and display
function Total() {
    player1Total += player1RoundTotal;
    computerTotal += computerRoundTotal;
    rollCount++;
    player1Round.innerHTML = player1RoundTotal;
    computerRound.innerHTML = computerRoundTotal;
    document.getElementById('player1Total').innerHTML = player1Total;

    document.getElementById('computerTotal').innerHTML = computerTotal;
    document.getElementById('rollNumber').innerHTML = rollCount;
}

//Run game button
buttonRoll.addEventListener('click', function() {
    rollTheDice();
    Total();
    roundTracker();
});
