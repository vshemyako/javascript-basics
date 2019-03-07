function reverse(array) {
    let reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversedArray.push(array[index]);
    }
    return reversedArray;
}

console.log(reverse([1, 2, 3]));

function reverseInPlace(array) {
    let iterationsNumber = Math.floor(array.length / 2);

    for(let index = 0; index < iterationsNumber; index++) {
        let left = array[index];
        let right = array[array.length - index - 1];

        array[index] = right;
        array[array.length - index - 1] = left;
    }
}

let arrayToReverse = [4, 6, 1];
reverseInPlace(arrayToReverse);
console.log(arrayToReverse);