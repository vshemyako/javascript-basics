var name = "Global scope";

function declareAndPrintName() {
    var name = "Local scope";
    console.log(name);
}

declareAndPrintName(); // global scope is polluted with 'declareAndPrintName' function and its invocation

console.log(name);