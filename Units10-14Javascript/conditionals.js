// Conditionals exercise solution
alert('Hello Michael!');

let age = Number(prompt('Please enter your age.'));

while (isNaN(age)) {
	age = Number(prompt('Please enter your numerical age.'));
}

// Conditionals lesson exercise
if (age < 0) {
	console.log('Error:  incorrect age - please refresh browser and reenter correct age');
} else if (age === 21) {
	console.log('Happy 21st birthday!!');
} else if (age % 2 !== 0) {
	console.log('Your age is odd!');
} else age % Math.sqrt(age) === 0;
console.log('Your age is a perfect square!');

/* examples modeled
if (age < 18) {
	console.log('Sorry, you are not old enough to enter the venue');
} else if (age < 21) {
	console.log('You can enter, but you cannot drink alcohol.');
} else {
	console.log('You can enter and you can drink alcohol.');
}
*/
