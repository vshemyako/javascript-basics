function foo() {
    var a = 2;
    this.bar();
}

foo.a = 5;

function bar() {
    console.log(this.a);
}

foo();