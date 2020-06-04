alert('Welcome to Guessing Game Michael!');

// create secret number
let secretNumber = 4;

// ask user for guess
let stringGuess = prompt('Guess a number.');
let guess = Number(stringGuess);

while (isNaN(guess)) {
	guess = Number(prompt('Please enter your guess in numerical form.'));
}

alert('Your number is ' + guess);

// check if guess is correct
if (guess === secretNumber) {
	alert('YOU GUESSED CORRECTLY!');
} else if (guess > secretNumber) {
	//check if guess is higher
	alert('Your guess is too high.  Please guess again.');
} else {
	//check if lower
	alert('Your guess is too low.  Please guess again.');
}

/*
else {
	alert('Your guess is incorrect.');
}
*/

/* Another option for String and Number
let secretNumber = 4;
let guess = prompt('Guess a number');
if(Number(guess))=== secretNumber) {
    alert('YOU GOT IT RIGHT!);
}


let guess = Number(prompt('Guess a number.'));
*/
