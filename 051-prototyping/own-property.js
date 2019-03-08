/**
 * Shows how to determine whether a property belongs to the object
 */
function listOwnProperties(object) {
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            console.log(`Owned property ${property} of value ${object[property]}`);
        }
    }
}

let creature = {
    name: "Creature",
    breathe: function () {
        console.log("Breathing");
    }
};

let monkey = {
    __proto__: creature,
    name: "Monkey",
    eat: function () {
        console.log("Eating banana");
    }
};

listOwnProperties(monkey);