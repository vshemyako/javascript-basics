let subtract = (left, right) => {
    return right === undefined
        ? -left
        : left - right;
};

console.log(subtract(5));
console.log(subtract(10, 2));

let subtractWithDefaults = (left, right = 1) => {
    return left - right;
};

console.log(subtractWithDefaults(5));
console.log(subtract(6, 2));