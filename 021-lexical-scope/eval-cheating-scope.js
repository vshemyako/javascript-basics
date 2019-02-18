// Examines possibilities to cheat lexical scope during runtime by using eval(..) function calls.
function print(code, first) {
    eval(code);
    console.log(first, second); // it's assumed that local variable 'second' will be declared in the passed code
}

print("var second = 2", 1); // 1 2