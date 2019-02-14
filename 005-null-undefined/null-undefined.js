// Tests different behaviors of 'null' and 'undefined' types
console.log(null == undefined); // true

// null's quirks
// null's range comparison converts it to '0'
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true!

// undefined's quirks
// undefined's range comparison converts it to 'NaN'
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false