let firstPerson = {
    surname: "first"
};

let secondPerson = {
    surname: "second"
};

let smallPerson = {
    __proto__: firstPerson,
    name: "small"
};

console.log(smallPerson.surname); // first
console.log(Object.getPrototypeOf(smallPerson));
Object.setPrototypeOf(smallPerson, secondPerson);
console.log(smallPerson.surname); // second
console.log(Object.getPrototypeOf(smallPerson));
