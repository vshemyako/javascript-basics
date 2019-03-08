let creature = {
    doLive: function () {
        console.log("Living");
    }
};

let animal = {
    doEat: function () {
        console.log("Eating");
    }
};
animal.__proto__ = creature;

let rabbit = {
    doJump: function () {
        console.log("Jumping");
    }
};

rabbit.__proto__ = animal;
rabbit.doJump(); // Jumping
rabbit.doEat(); // Eating
rabbit.doLive(); // Living