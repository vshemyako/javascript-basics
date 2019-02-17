// Function is a subtype of an object type
function getRandomNumber(multiplicator) {
    return Math.random() * multiplicator;
}

getRandomNumber.property = "Custom property of a function";

console.log(getRandomNumber);
console.log(getRandomNumber(10));
console.log(getRandomNumber.property); // access to a function's property