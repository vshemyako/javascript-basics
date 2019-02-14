// Examines 'return' behavior of || operator
var undefined;
var zero = 0;
var emptyString = "";
var greetingMessage = "Hello darkness my old friend";

var evaluatedResult = undefined || zero || greetingMessage || emptyString;
console.log(evaluatedResult); // prints value of greetingMessage variable

// Examines 'return' behavior of && operator
var andOperatorEvaluatedResult = greetingMessage && undefined && zero;
console.log(andOperatorEvaluatedResult); //prints 'undefined'

// Examines 'return' behavior of ! operator
// Two step process: 1. converts data to a logical type; 2. returns the opposite value
console.log(!undefined); // true
console.log(!greetingMessage); // false