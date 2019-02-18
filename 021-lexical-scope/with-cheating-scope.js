// Examines possibilities to cheat lexical scope using 'with' function
function cheatScope(object) {
    // Creates nested scope using 'with' function
    with (object) {
        property = "cheated"; // LHS assignment
    }
}

var firstObject = {
    property: "non-cheated"
};

var secondObject = {};

cheatScope(firstObject);
cheatScope(secondObject);

console.log(firstObject.property); // cheated
console.log(secondObject.property); // undefined
console.log(property); // leaked global