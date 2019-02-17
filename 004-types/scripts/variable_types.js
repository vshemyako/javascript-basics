var number = 10.0;
var typeNumber = typeof number;
alert(number + " is of type " + typeNumber);

var word = "hello";
var typeWord = typeof word;
alert(word + " is of type " + typeWord);

var predicate = 1 > 2;
var typeBoolean = typeof predicate;
alert(predicate + " is of type " + typeBoolean);

var justice = null;
var typeNull = typeof justice;
alert(justice + " is of type " + typeNull);

var universeSize;
var typeUndefined = typeof universeSize;
alert(universeSize + " is of type " + typeUndefined);

var item = {};
var typeObject = typeof item;
alert(item + " is of type " + typeObject);

var symbol = Symbol();
var typeSymbol = typeof symbol;
alert(symbol.toString() + " is of type " + typeSymbol);