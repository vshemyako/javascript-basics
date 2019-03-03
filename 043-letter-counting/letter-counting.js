function countLetters(word, letterToCount) {
    let count = 0;
    for (let index = 0; index < word.length; index++) {
        if (word[index] === letterToCount) {
            count++;
        }
    }
    return count;
}

console.log(countLetters("bnb", "B"));
console.log(countLetters("BnB", "B"));
console.log(countLetters("ABRACADABRA", "B"));