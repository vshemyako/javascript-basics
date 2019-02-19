// Examines not so obvious behavior of JavaScript compiler which is called 'hoisting'.
split = "split";
var split;
console.log(split); // split is printed, NOT undefined

console.log(holistic); // undefined is printed, NOT ReferenceError
var holistic = "holistic";