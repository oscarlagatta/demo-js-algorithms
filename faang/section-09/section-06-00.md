STRINGS

A sub-problem is a problem we have to solve along the way to solving the main problem.

Palindromes

A palindrome is a string that reads the same forward and backwards.

## Word Palindromes:

* Racecar
* Madam
* Level
* Rotor
* Civic

## Phrase Palindromes:

* A man, a plan, a canal, Panama!
* Was it a car or a cat I saw?
* Able was I ere I saw Elba
* Madam, in Eden, I'm Adam
* Eva, can I see bees in a cave?


if length of the string is odd we have pointers from the outer, 
and if even from the center we have the pointers.


aaabaaa
initialize left and right pointers for the center, and because is odd we initialize from b center
and we expand pointers outwards and compare, 

aaabbaaa
having an even we initialize we use the pointers at the center bb

Depending on the context of the palindrome questions they might be three different solutions


Challenge: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity.

Step 1: verify the constraints (none for this case)
Step 2: test cases

    'aabaa' => true
    'aabbaa' => true
    'abc' => false, failed case
    'a' => true, single character
    '' => true, empty character
    'A man, a plan, a canal: Panama' => true

Solution should return true or false.


