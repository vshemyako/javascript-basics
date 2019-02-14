// Examines different type conversions to boolean type
// 0, '', null, undefined, NaN - are all converted to false
var zero = 0;
var emptyString = "";
var nullType = null;
var undefinedType = undefined;
var notANumber = NaN;

if (zero || emptyString || nullType || undefinedType || notANumber) {
    console.log("Assumptions were wrong.");
}

// The rest values are converted to true
var infinityValue = Infinity;
if (infinityValue) {
    console.log("Assumptions were right");
}