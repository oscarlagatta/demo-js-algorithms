// A string is almost a palindrome by removing 1 letter.
// Step1: do we consider a palindrome as almost a palindrome
//        yes, return true.
// Test cases
// 'raceacar' => true
// 'abccdba' => removing the d will be a palindrome so should return true
// 'abcdefdba' => even if we remove characters it's not a palindrome returns false
//  '' => returns true
// 'ab' => returns true, removing a character the remaining character will be a palindrome.

//
const validSubPalindrome = function (s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right++;
    }

    return true; // all matches
}

export const isValidPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true; // all matches
}


