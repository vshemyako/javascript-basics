function print() {
    console.log(this.word);
}

global.word = "global";
var object = {
    word: "object"
};

print(); // global
print.call(object); // object
print.apply(object); // object