// RHS assignment fails - ReferenceError is thrown

function print(word) {
    console.log(prefix + word); // ReferenceError: prefix is not defined
    prefix = word;
}

print("abc");