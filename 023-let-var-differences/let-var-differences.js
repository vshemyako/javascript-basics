// 1. let variable cannot be re-declared
var varName = "First Declaration";
var varName = "Second Declaration";
console.log(varName);

let letName = "First Declaration";
// let letName = "Second Declaration"; // SyntaxError: Identifier 'letName' has already been declared
console.log(letName);

// 2. let variable is block scoped
if (true) {
    var varIf = "Within if block";
}
console.log(varIf);

if (true) {
    let letIf = "Within if block";
}
// console.log(letIf); // ReferenceError: letIf is not defined

// 3. let variable declaration is not hoisted
console.log(varHoisted);
var varHoisted = "Hoisted";

// console.log(letHoisted); // ReferenceError: letHoisted is not defined
let letHoisted = "Hoisted";