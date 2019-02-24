// ES6 added new feature to define properties of an object in literal form
var prefix = "insane";

// Object properties' names can be defined dynamically
var crazy = {
    [prefix + "Name"]: "farseer",
    [prefix + "Age"]: 1410
};

console.log(crazy["insaneName"]); // farseer
console.log(crazy["insaneAge"]); // 1410
