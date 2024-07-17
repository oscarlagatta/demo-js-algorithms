
// Given a string find the length of the longest substring without repeating characters

// 'abccabb' => abc , cab

// Test cases

// 'abccabb' => abc cab => the correct answer is 3
// 'ccccccc' => 1
// '' => 0
// 'abcbda' => 4



const lengthOfLongestSubstring = function (s) {

    if (s.length <= 1) return s.length;

    let longest = 0;

    for (let left = 0; left < s.length; left++) {
        let seenChars = {};
        let currentLength = 0;

        for (let right = left; right < s.length ; right++) {
            const currentChar = s[right];

            if(!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break; // exit for loop
            }
        } // for loop
    } // for loop

    return longest;
}