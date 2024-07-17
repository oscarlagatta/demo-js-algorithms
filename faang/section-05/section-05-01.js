// s: 'abc#d'
// t: 'abzz##d'

const backSpaceCompare = function (s, t) {

    let p1 = s.length - 1; // last character
    let p2 = t.length - 1; // last character

    while (p1 >= 0 || p2 >= 0) {
        // checks if p1 or p2 are pointing to hashes

        if (s[p1] === '#' || t[p2] === '#') {
            // we don't compare the characters yet
            if (s[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if (s[p1] === '#') {
                        backCount = backCount + 2;
                    }
                } // while
            } // if
            if (t[p2] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p2--;
                    backCount--;
                    if (t[p2] === '#') {
                        backCount = backCount + 2;
                    }
                } // while
            }
        } else {
            // we have a character
            if (s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        } // if
    } // while
    return true;
}