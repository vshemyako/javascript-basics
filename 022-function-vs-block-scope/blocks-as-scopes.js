// In code prior to ES6 only functions, 'with' construct, and try-catch blocks created new scopes
for (var index = 0; index < 10; index++) {
}
console.log(index);

if (true) {
    var name = "if-block";
}
console.log(name);

var name = "global-name";
var object = {
    name: "within-an-object"
};

// with creates it own scope from the object passed
with (object) {
    console.log(name); // within-an-object is printed
}

// catch clause also defined its own scope
try {
    null();
} catch (exception) {
    console.log(exception);
}
// console.log(exception); // ReferenceError
