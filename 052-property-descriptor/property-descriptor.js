let car = {
    wheel: 4,
    color: 'red',
    model: "Tesla"
};

let wheelPropertyDescription = Object.getOwnPropertyDescriptor(car, "wheel");
console.log(wheelPropertyDescription);

if ("wheel" in car) {
    console.log("This car has a wheel!");
}
if (!("door" in car)) {
    console.log("This car doesn't have a single door!");
}