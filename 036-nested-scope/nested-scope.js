let pizza = function (size) {
    const ingredient = function (amount, unit, name) {
        let ingredientSize = size * amount;
        if (ingredientSize > 1) {
            unit += 's';
        }
        console.log(`${ingredientSize} ${unit} ${name}`);
    };

    ingredient(1, "kilo", "dough");
    ingredient(0.5, "liter", "milk");
    ingredient(10, "item", "meat");
};

pizza(2);