// Test Cases
//
// * S: 'ab#z' T:'az#z'   True
// * S: 'abc#d' T:'acc#c' False
// * S: 'x#y#z#' T:'a#'   True
// * S: 'a###b' T:'b'   True
// * S: 'Ab#z' T:'ab#z'  False
//
// Convert into final form and compare if they are equal.

// Generic function to check hashes and remove the characters
const buildString = function (string) {
    const builtArray = [];

    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            builtArray.push(string[p]);
        } else {
            builtArray.pop();
        }
    } // O(n)
    return builtArray;
}

const backSpaceCompare = function (s, t) {

    const finalS = buildString(s);
    const finalT = buildString(t);

    if (finalS.length !== finalT.length) {
        return false;
    } else {
        for (let p = 0; p < finalS.length; p++) {
            if (finalS[p] !== finalT[p]) {
                return false;
            }
        }
    }
    return true;
}


