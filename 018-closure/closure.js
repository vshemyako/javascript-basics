function createSubtractor(subtractValue) {
    return function (sourceValue) {
        return sourceValue - subtractValue;
    };
}

let minusTen = createSubtractor(10);
let minusFive = createSubtractor(5);

console.log(minusTen(100) == 90);
console.log(minusFive(100) == 95);