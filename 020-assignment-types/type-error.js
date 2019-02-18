// RHS assignment succeeded, but value type is wrong
var prefix = "super";

function print(word) {
    prefix(); // TypeError: prefix is not a function
    console.log(word);
}

print("power");