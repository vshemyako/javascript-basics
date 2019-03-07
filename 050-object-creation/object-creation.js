function createPerson(name) {
    let person = {};
    person.name = name;
    person.greet = function () {
        console.log(`Hello! I'm ${person.name}.`);
    };
    return person;
}

let mike = createPerson("Mike");
console.log(mike.name);
mike.greet();

function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello! I'm ${this.name}.`);
    };
}

let ron = new Person("Ron");
console.log(ron.name);