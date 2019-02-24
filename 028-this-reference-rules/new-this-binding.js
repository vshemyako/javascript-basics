// Examines behavior of 'this' related to 'new' function calls
function constructorCall(name) {
    this.name = name;
}

var firstObject = new constructorCall("first");
var secondObject = new constructorCall("second");

console.log(firstObject.name);
console.log(secondObject.name);