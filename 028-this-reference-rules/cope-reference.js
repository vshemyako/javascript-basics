function first() {
    console.log("First's this: " + this);
    console.log(this.property);
}

function second(func) {
    console.log("Second's this: " + this);
    func();
}

function third(func) {
    console.log("Third's this: " + this);
    second(func);
}

var godObject = {
    property: "inner",
    first: first
};

global.property = "outer";

third(godObject.first);
