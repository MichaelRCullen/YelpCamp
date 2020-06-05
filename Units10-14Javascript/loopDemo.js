// String we are looping over
var str = 'hello';

// first character si at index 0
var count = 0;

while (count < str.length) {
	console.log(str[count]);
	count++;
}

/*
var count = 1;

while (count < 20) {
	console.log('count is: ' + count);
	count += 2;
}
*/

/*
alert('Welcome to the CodeHS Demo page');

function start() {
	var name = prompt('Enter your name:');
	println('Name is: ' + name);

	var age = prompt('Enter your age.');
	println('Your age is: ' + age);
}

start();
*/

/* Annoy-O-Matic Code Along - without indexOf
var answer = prompt('Are we there yet?');

while (answer !== 'yes' && answer !== 'yea') {
	answer = prompt('Are we there yet?');
}
alert('YAY, We made it!');
*/

var answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1) {
	answer = prompt('Are we there yet?');
}
alert('YAY, We made it!');
