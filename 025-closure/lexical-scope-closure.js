// Closure is a reference to the function's enclosing lexical scope
function enclosingScope() {
    var secret = "secret";

    function printSecret() {
        console.log(secret);
    }

    return printSecret; // printSecret has a closure over its lexical scope
}

var closure = enclosingScope();
closure();
