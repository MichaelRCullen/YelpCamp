// 1.  Print all numbers between -10 and 19
console.log('Print all numbers between -10 and 19');
var number = -10;

while (number < 20) {
	console.log(number);
	number++;
}

// 2.  Print all even numbers between 10 and 40
console.log('Print all even numbers between 10 and 40');
number = 10;

while (number <= 40) {
	console.log(number);
	number += 2;
}

/*  better solution as it verifies if number is even regardless of start 
while (number <= 40) {
    if(number % 2 === 0) {
        console.log(number);
    }
	number ++;
}
*/

// 3.  Print all odd numbers between 300 and 333
console.log('Print all odd numbers between 300 and 333');
number = 300;

while (number <= 333) {
	if (number % 2 !== 0) {
		console.log(number);
	}
	number++;
}

/*
while (number < 334) {
	console.log(number);
	number += 2;
}
*/

// 4.  Print all numbers divisible by 5 AND 3 between 5 and 50
console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
number = 5;

while (number <= 50) {
	if (number % 5 === 0 && number % 3 === 0) {
		console.log(number);
	}
	number++;
}

/* incorrect first attempt
while (number <= 50) {
	if (number % 3 === 0) {
		console.log(number);
	} else if (number % 5 === 0) {
		console.log(number);
	}
	number++;
}
*/
