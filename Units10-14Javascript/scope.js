// INSIDE the function - inside this scope ...  x = 40
function doMath() {
	var x = 40;
	console.log(x);
}

doMath();
// OUTSIDE of the funciton known as the "Global Scope" ... x is undefined
console.log(x);

// declare x in Global Scope
var x = 'hello';
doMath();
console.log(x);

// when something is defined OUTSIDE of a function we still have access to it
// INSIDE the function
var y = 99;
function doMoreMath() {
	console.log(y);
}

doMoreMath();

// Variable defined in global scope can be modified inside function
var z = 100;
function doesVarChange() {
	z = 200;
	console.log(z);
}

doesVarChange();
console.log(z);

// Variable defined in global scope is not modified by variable defined INSIDE funciton
var a = 50;
function doesVarChange2() {
	var a = 525;
	console.log(a);
}

doesVarChange2();
console.log(a);

// SCOPE QUIZ - what will be the output of this block of code?
var num = 8;
function scopeQuiz() {
	num += 1;
	if (num % 5 === 0) {
		return true;
	} else {
		return false;
	}
}

num += 1;
console.log(scopeQuiz());
