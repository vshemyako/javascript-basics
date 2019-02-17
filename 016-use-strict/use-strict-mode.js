"use strict";

function declareGlobalVariable() {
    implicitlyDeclared = 10; // ReferenceError: implicitlyDeclared is not defined
}

declareGlobalVariable();
console.log(implicitlyDeclared); // 10