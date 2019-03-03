let minimum = (first, second) => {
    return first < second
        ? first
        : second;
};

console.log(minimum(0, -2));
console.log(minimum(3, 5));
console.log(minimum(2, 2));