function reverse(array) {
    let reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversedArray.push(array[index]);
    }
    return reversedArray;
}

console.log(reverse([1, 2, 3]));