let count = 0;

module.exports.generateNext = function () {
    return ++count;
};

module.exports.greet = function () {
    console.log("Hello!");
};