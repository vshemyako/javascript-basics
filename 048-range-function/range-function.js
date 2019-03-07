// Takes two arguments, returns an array
function range(start, finish) {
    let range = [];
    for (; start <= finish; start++) {
        range.push(start)
    }
    return range;
}

console.log(range(1, 10));

// Sums every passed element, returns the result
function sum(range) {
    let sum = 0;
    for (let number of range) {
        sum += number;
    }
    return sum;
}

console.log(sum(range(1, 10)));