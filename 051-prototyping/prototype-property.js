/**
 * __proto__ property is not supported in IE10 browser, but there's an alternative approach, which works everywhere
 */

function Machine() {
    this.execute = function () {
        console.log("Executing");
    }
}

let firstMachine = new Machine();

function Device() {
    this.perform = function () {
        console.log("Performing")
    }
}

let firstDevice = new Device();

function Auto() {
    this.drive = function () {
        console.log("Driving");
    };
    // this.__proto__ = firstDevice;
}

let firstAuto = new Auto();
firstAuto.drive();
if (firstAuto.perform) {
    firstAuto.perform();
}

Auto.prototype = firstMachine;
let secondAuto = new Auto();
secondAuto.drive();
if (secondAuto.perform) {
    secondAuto.perform();
}
if (secondAuto.execute) {
    secondAuto.execute();
}
