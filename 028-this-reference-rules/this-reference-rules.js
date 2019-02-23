// 1. Default 'this' reference rule. Plain method invocation.
function foo() {
    console.log(this.a);
}

global.a = 2;
foo();

// 2. Implicit 'this' reference binding
function printImplicitly() {
    console.log(this.a);
}

var object = {
    a: 3,
    printImplicitly: printImplicitly
};

object.printImplicitly(); // object's context is used

// 2.1. In case reference object chain is used - the last reference is used
var secondObject = {
    a: "secondObject",
    print: printImplicitly
};

var firstObject = {
    a: "firstObject",
    secondObject: secondObject
};

console.log("Reference chain");
firstObject.secondObject.print();