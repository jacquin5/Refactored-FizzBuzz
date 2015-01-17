
// Initialized Variables
var userinput;


//Prompts user for a number 
function promptUser() {
	 userinput = +prompt("Enter a number for FizzBuzz to generate");
	 if (isNaN(userinput)) {
	 	alert("This is not a number.  Please enter number")
	 	document.location.reload(true);
	 } else if (typeof userinput == "number") {
	 	console.log("This is a number");
	 	return userinput;	 
	 }
}

//Generates FizzBuzz using UserInput
function fizzBuzz() {
	for (var x = 1; x < userinput; x++) {
		if (x % 3 === 0 && x % 5 === 0) {
			document.write('FizzBuzz <br>');
		} else if (x % 3 === 0) {
			document.write('Fizz <br>');
		} else if (x % 5 === 0) {
			document.write('Buzz <br>')
		} else {
			document.write(x);
		}
	}
}



promptUser();
fizzBuzz();