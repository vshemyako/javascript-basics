let car = {
    wheel: 4,
    color: 'red',
    model: "Tesla"
};

let wheelPropertyDescription = Object.getOwnPropertyDescriptor(car, "wheel");
console.log(wheelPropertyDescription);