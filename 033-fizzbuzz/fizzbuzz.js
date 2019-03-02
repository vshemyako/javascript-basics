for (let index = 1; index <= 100; index++) {
    let divisibleByThree = index % 3 === 0;
    let divisibleByFive = index % 5 === 0;

    if (divisibleByThree && divisibleByFive) {
        console.log("FizzBuzz");
    } else if (divisibleByThree && !divisibleByFive) {
        console.log("Fizz");
    } else if (!divisibleByThree && divisibleByFive) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
}