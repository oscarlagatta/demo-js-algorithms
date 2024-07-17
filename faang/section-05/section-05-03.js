
// Given a string find the length of the longest substring without repeating characters

// 'abccabb' => abc , cab

// Test cases

// 'abccabb' => abc cab => the correct answer is 3
// 'ccccccc' => 1
// '' => 0
// 'abcbda' => 4


// SLIDING WINDOW TECHNIC
/*
* FORM A WINDOW OVER SOME PORTION OF SEQUENTIAL DATA, THEN MOVE THAT WINDOW THROUGHOUT THE DATA TO CAPTURE DIFFERENT
* PARTS OF IT.
*
* 'abcdefg' [1,3,7,9,2,4]
*
* we want to form a window on a smaller portion of the data, (e.g. ab), can be larger or smaller
* then we move the windows throughout the data and capture different elements, this can jump different sections, but
* the main idea is to get the small portion of the data, and then decide if we want to move forward or backwards to
* another portion of the data
*
* Problem
*
* Given an array of integers, find two contiguous integers that form the greatest sum
*
* [ 1,3,7,9,2,4]
*   [ 1,3] => 4
*       [ 3,7] => 10
*          [ 7,9] => 16 ETC.
*
* CAN WE IMPROVE THE PREVIOUS IMPLEMENTATION OF THE lengthOfLongestSubstring function ?
*
* HINTs
*   Use the sliding window to represent the current substring
*   The size of the window will change based on new characters, and characters we've already seen before
*   Our seen character hashMap keeps track of what chars we've seen, and the index we saw them at
*   We use a Let and Right pointers
*   keep track of the longest value
*   keep track of a hash Map with all chars we've seen
*
*
*   'abccabb
* */

const lengthOfLongestSubstring = function (s) {

    if(s.length<= 1) return s.length;

    const seenChars = {};

    let left = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        const prevSeenChar = seenChars[currentChar];

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        seenChars[currentChar] = right;

        longest = Math.max(longest, right-left+1);
    }

    return longest;
}

/*
* Space and time complexity
*
* two for loops that will scale with the string, we have Time: o(n^2)
*
* For space complexity, given we use a hashmap, we store the string in the seenChars object, and as it grows the string
* for this will be every time it resets the object, and it's not cumulative, for Space: O(n).
* */