var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
var winsCounter = 0;
var lossesCounter = 0;
var guessesLeftCounter = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var currentGuesses = [];

document.onkeyup = function(event) {

	var userGuess = event.key;

	if(computerChoices.indexOf(userGuess)>-1 && currentGuesses.indexOf(userGuess) === -1) {
		
		if(userGuess === computerGuess) {
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			winsCounter++;
			guessesLeftCounter = 10;
			currentGuesses = [];
			document.getElementById("guesses").innerHTML = currentGuesses;
			document.getElementById("wins").innerHTML = winsCounter;
		}
		else {
			guessesLeftCounter--;
			currentGuesses.push(userGuess);
			document.getElementById("guesses").innerHTML = currentGuesses;
			document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
		}

		if(guessesLeftCounter === 0) {
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			lossesCounter++;
			guessesLeftCounter = 10;
			currentGuesses = [];
			document.getElementById("guesses").innerHTML = currentGuesses;
			document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
			document.getElementById("losses").innerHTML = lossesCounter;
		}
	}

}