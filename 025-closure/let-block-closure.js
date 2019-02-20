// let variable is redeclared in each loop's iteration
for(let index = 0; index < 5; index++){
    setTimeout(function () {
        console.log(index)
    }, 1000);
}