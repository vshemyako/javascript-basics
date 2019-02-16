// Examines new primitive type added in ES6
let symbol = Symbol();
console.log(symbol);
// Symbols with the same name are unique
console.log(Symbol(911) == Symbol(911));

// Create symbol in the global registry
let numericSym = Symbol.for("first");
// The same symbol was fetched from the registry
console.log(numericSym == Symbol.for("first"));