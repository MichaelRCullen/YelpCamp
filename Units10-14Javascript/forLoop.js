console.log('Printing numbers from 1 - 5 with a for loop');
for (var count = 0; count < 6; count++) {
	console.log(count);
}

console.log('Printing each character in a string with a for loop');
var greeting = 'hello';
for (var i = 0; i < greeting.length; i++) {
	console.log(greeting[i]);
}

// For Loops Problem Set
console.log('Print all numbers between -10 and 19');
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log('Print all even numbers between 10 and 40');
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

console.log('Print all odd numbers between 300 and 333');
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}
