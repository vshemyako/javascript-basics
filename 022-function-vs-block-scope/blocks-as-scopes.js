// In code prior to ES6? only functions created new scopes
for (var index = 0; index < 10; index++) {
}
console.log(index);

if (true) {
    var name = "if-block";
}
console.log(name);

