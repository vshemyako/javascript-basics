// Define an array
var mess = [
    "a",
    2,
    true
];

console.log(mess);
console.log(mess[2]); // 0-based as usual
console.log(mess[3]); // undefined
console.log(mess.length);

mess[3] = null;
console.log(mess[3]); // null
