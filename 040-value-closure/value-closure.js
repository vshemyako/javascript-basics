function closure(value) {
    return () => console.log(value);
}

let printOne = closure(1);
let printTwo = closure(2);

printOne();
printTwo();