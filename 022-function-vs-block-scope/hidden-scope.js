var name = "Global scope";

(function declareAndPrintName() {
    var name = "Local scope";
    console.log(name);
})(); // function 'declareAndPrintName' is hidden, global scope is not polluted

console.log(name);