// Examines different rules which apply to 'this' identifier
function identifyThis() {
    console.log(this.property);
}

// Define variable in the global scope
global.property = "node.js global";

let firstObject = {
    property: "first",
    identify: identifyThis
};

let secondObject = {
    property: "second"
};

identifyThis(); // node.js global
firstObject.identify(); // first
identifyThis.call(secondObject); // second
new identifyThis(); // undefined