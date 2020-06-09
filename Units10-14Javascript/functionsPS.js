/* isEven()
 Write a function named isEven() which takes a single numeric argument
 and returns true if the number is even, and false otherwise.

 isEven(4);  //true
 isEven(21);  //false
 isEven(68);  //true
 isEven(333);  //false
 */

// original attempt same as solution *********************************
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

// SUBSTANTIALLY SHORTER VERSION OF isEven() ****************************
function isEven(number) {
	return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

/* factorial()
 Write a function named factorial() which takes a single numeric argument
 and returns the factorial of that number.
 
 factorial(5);  //120
 factorial(2);  //2
 factorial(10);  //3628800
 factorial(0);  //1
 */

/* Original attempt *******************************************************
 function factorial(number) {
	var product = 1;
	if (number < 0) {
		return (product = 'error: factorials are defined only for non-negative numbers');
	} else if (number === 0) {
		return product;
	} else {
		for (var i = number; i > 0; i--) {
			product === i * product;
		}
		return product;
	}
}

console.log(number + " factorial is: " + factorial(5));
*/

// SOLUTION ******************************************************************
function factorial(number) {
	// define result variable
	var result = 1;
	//calculate factorial and store value in result
	for (var i = 2; i <= number; i++) {
		result *= i;
	}
	// return the result variable
	return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

/* kebabToSnake()
 Write a function named kebabToSnake() which takes a single kebab-cased
 string argument and returns the snake_cased version.
 
 kebabToSnake("hello-world");  //"hello_world"
 kebabToSnake("dogs-are-awesome");  //"dogs_are_awesome"
 kebabToSnake("blah");  //"blah"
 */

/* Original attempt **************************
 function kebabToSnake(kebab) {
	snake = kebab.replace('-', '_');
	console.log(snake);
}

kebabToSnake('hello-world');
kebabToSnake('dogs-are-awesome');
kebabToSnake('blah');
*/

// SOLUTION ******************************************************************
function kebabToSnake(str) {
	// replace all '-' with '_'
	var newStr = str.replace(/-/g, '_');
	//return str
	return newStr;
}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));
