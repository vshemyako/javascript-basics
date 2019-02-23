function thisPlusLexical(lexical) {
    console.log(this.lexical, lexical);
    return this.lexical + lexical;
}

var object = {
    lexical: 6
};

var hardWired = function () {
    return thisPlusLexical.apply(object, arguments);
};

hardWired(7);