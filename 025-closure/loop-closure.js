for (var index = 0; index < 5; index++) {
    setTimeout(
        function () {
            console.log(index)
        },
        1000
    );
}

for (var j = 0; j < 5; j++) {
    (function (j) {
            setTimeout(
                function () {
                    console.log(j)
                },
                1000
            );
        }
    )(j);
}