// Examines extended functionality of Javascript functions in ES6
//

// Default parameters (using '=' sign)
function showGreeting(name = "Santa Claus", event = "New Year") {
    console.log(`Dear ${name}, Happy ${event}`);
}

showGreeting("Lady Gaga", "Oscar Awards");
showGreeting();

    