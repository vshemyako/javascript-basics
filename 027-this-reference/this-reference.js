function printCount() {
    this.count++;
}

printCount.count = 0;

for (var index = 0; index < 5; index++) {
    printCount();
}

console.log(printCount.count);
console.log(count);