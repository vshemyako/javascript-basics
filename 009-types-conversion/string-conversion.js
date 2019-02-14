// There're three conversion types in Javascript
// String conversion
console.log(String(null)); // null
// Numeric conversion
console.log(Number(null)); // 0
// Boolean conversion
console.log(Boolean(null)); // false

// Numeric conversion edge cases
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number("\n 1 \n")); // 1

// Boolean conversion edge cases
console.log("Boolean conversion cases");
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("non-empty")); // true
console.log(Boolean({})); // true
