let computer = {
    cpu: "Intel",
    monitor: "BenQ"
};

console.log(computer.cpu);
console.log(computer.monitor);

// Removing an property
delete computer.cpu;

console.log(computer.cpu);
console.log(computer.monitor);

// Difference between property with 'undefined' value and absence of a property
let fridge = {
    brand: "Bosch",
    color: "white",
    door: undefined
};

console.log("door" in fridge); // true
delete fridge.door;
console.log("door" in fridge); // false
