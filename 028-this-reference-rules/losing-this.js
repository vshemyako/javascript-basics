// Demonstrates how a function reference loses it local context
function print() {
    console.log(this.contextName);
}

var object = {
    contextName: "local-object",
    print: print
};

global.contextName = "global-object";

var copiedFuncReference = object.print;
copiedFuncReference();

print.shout = function() {
    console.log(this.exclaim);
};

print.exclaim = "yo";

print.shout();