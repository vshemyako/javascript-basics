// An example of closure - a module pattern
function module() {
    var name = "Powerful Module";
    var alphabet = ["a", "b", "c"];

    function printName() {
        console.log(name);
    }

    function printAlphabet() {
        console.log(alphabet.join(", "));
    }

    return {
        printName: printName,
        printAlphabet: printAlphabet
    };
}

var moduleInstance = module();
moduleInstance.printName();
moduleInstance.printAlphabet();
