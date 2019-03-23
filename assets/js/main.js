// alert('Im working');

//Creates an array that lists out all the possibilities
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Sets the initial scores
var wins = 0
var losses = 0
var guessesLeft = 10
var guessHistory = [];
var computerChoice = [];

// Gets the value from the html for the scores
var userWins = document.querySelector("#user-won");
var userLosses = document.querySelector("#user-losses");
var userGuessesLeft = document.querySelector("#guesses-left");
var userGuessHistory = document.querySelector("#so-far");

// This function is run whenever the user presses a key.
document.onkeyup = function(event){
    // Determines which key was pressed.
    var userGuess = event.key;
    //Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    // Pushes the randomAlphabet into an empty array named computerChoice
    computerChoice.push(randomAlphabet);
    // Starts the function for the evaluator
    evaluator(userGuess, computerChoice[0]);
    // Starts the function for the history of what has been typed
    history(guessHistory, userGuess);
}
function history(guessHistory, userGuess){
    guessHistory.push(userGuess);
    userGuessHistory.textContent = guessHistory;
    }

//This function will evaluate the outcome of the game
function evaluator(user, com){
    if (user === com){
        agree(user, com);
    }
    else(user != com)
        // alert("you lose")
        leftover(user, com);

    if (guessesLeft > 0){
    }
    else{
        reset();
    }

}
// This function runs when the user wins and resets the guesses
function agree(attempt1, attempt2){
    wins = wins + 1;
    alert("you win: " + attempt1 + " equals " + attempt2);
    userWins.textContent = wins;
    guessesLeft = 10
    reset();
}
// This function runs when the user loses and takes of 1 from the guesses left
function leftover(){
    guessesLeft = guessesLeft - 1;
    userGuessesLeft.textContent = guessesLeft;
}
// This function runs when you run out of guesses and you lose
function reset(){
    losses = losses +1;
    userLosses.textContent = losses;
    guessesLeft = 10;
    guessHistory = [];
    computerChoice = [];
};