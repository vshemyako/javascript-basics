// LHS behaves differently: in case target variable wasn't found
// The one is implicitly created in the global scope
// That behavior is forbidden in 'use strict' mode
function print(word) {
    console.log(word);
    prefix = "prefixed " + word;
}

print("non-strict-mode");
print(prefix);