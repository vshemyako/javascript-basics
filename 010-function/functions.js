function print(word) {
    console.log(word);
}

var firstInvocationResult = print("Java");
var secondInvocationResult = print("Script");

console.log(firstInvocationResult); // undefined
console.log(secondInvocationResult); // undefined

// Function declaration
function sum(left, right) {
    console.log(left + right);
}

// Function expression
var multiply = function (left, right) {
    console.log(left * right);
};

// Named function expression
var subtract = function named(left, right) {
    console.log(left - right);
};

sum(10, 20);
multiply(2, 8);
subtract(10, 4);