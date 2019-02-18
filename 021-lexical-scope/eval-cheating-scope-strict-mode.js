// Examines possibilities to cheat lexical scope during runtime by using eval(..) function calls.
"use strict";

function print(code, first) {
    eval(code);
    console.log(first, second); // ReferenceError, eval is executed in its own scope
}

print("var second = 2", 1);