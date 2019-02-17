// Examines behavior of immediately invoked function expressions
let result = (function selfInvoked() {
    console.log("No outer invocation required");
    return "Greetings!";
})();

console.log(result);

(function greet(strangerName) {
    console.log("Hello " + strangerName);
})("Johnny");