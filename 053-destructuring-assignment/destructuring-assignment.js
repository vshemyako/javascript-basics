// literal array destructuring
let numbers = [1, 2, 3, 4];
let [one, two, ...digits] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(digits); // [ 3, 4 ]

// literal object destructuring
let object = {
    name: "Object",
    age: 1
};

let {age, name} = object;
console.log(name); // Object
console.log(age); // 1

// destructuring object properties into differently named properties
let {name: nickname, age: ageNumber} = object;
console.log(nickname); // Object
console.log(ageNumber); // 1