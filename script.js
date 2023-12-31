var randomNum = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guess");
var guessButton = document.getElementsByTagName("button")[0];
var message = document.getElementById("message");
var guessCount = 0;

function checkGuess() {
	var guess = parseInt(guessInput.value);
	guessCount++;
	
	if (guess === randomNum) {
		message.innerHTML = "Congratulations! You guessed the number in " + guessCount + " guesses!";
		guessInput.disabled = true;
		guessButton.disabled = true;
	} else if (guess > randomNum) {
		message.innerHTML = "Too high! Guess again.";
	} else {
		message.innerHTML = "Too low! Guess again.";
	}
}
