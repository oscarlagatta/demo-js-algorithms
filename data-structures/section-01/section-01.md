# **_Interview - Big O Asymptotic notation_**

```javascript
const large = new Array(100).fill('nemo');



```

way to measure efficiency

What is good code ?
Readable
Scalable (Big O)

Big O complexity Chart

Operations by Elements, as elements grow how many more operations we need to perform.
Different functions can have different big o notations 
`o(n!), o(2^n), o(n^2), o(n log n), o(n)`

## **_O(n) - Linear time_**

<p>Is the most common notation in Big O </p>

(e.g.) having 3 elements we need 3 loops (operations). Same for more elements, so this case
is linear as the number of inputs increase the number of operations increase, the function 
has a big O notation of O(n), or Linear Time. Takes linear time to execute the function.

## **_O(1) - Constant Time_**

How many steps if the boxes increases ?
Number of operation is 1, constant time. No matter how many elements it's always 1 single operation.

```javascript
function compressFirstBox(boxes) {
        console.log(boxes[0])
}
```

What would be the big O for the following function. 
How many operation are here ?

```javascript
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}
```
Every time runs 2 operations, so in total a O(2) no matter how many elements is always 2 
operations. Overall is like a flat line in a graph with operations and elements. 
So at the end we represent as `O(1)`

What about the following function, 

```javascript
function funChallenge(input) {
    let a = 10; // 1. assignment. O(1)
    a = 50 + 3; // 2. assignment. O(1)
    
    // 3. based on the length of the input will be O(n) where n is the input.
    // Loops are linear time.
    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // called based on the length of the input so it's O(n)
        let stranger = true; // called based on the length of the input so it's O(n)
        a++; // O(n)
    }
    return a; // O(1)
}
```
If we calculate all the O 
3 steps + n + n + n + n; which is same as (3 + 4n) or BIG O(3+4n) => Big O(n).


```javascript
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10;  // O(1)
    let c = 50;  // O(1)
    
    for (let i = 0; i< input; i++) {
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }
    for (let j = 0; i< input; j++) {
        
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    
    let whoAmI = 'I don\'t know' // O(1)
}
```

Big O(4 + 5n) => O(n) 

Most of the time we need to give an answer and we don't need to calculate, so we need to simplify 

There are several rules we can follow:

Rule 1: Worst Case
    Rule 2: Remove Constants
        Rule 3: Different terms for inputs
            Rule 4: Drop Non Dominants

Rule 1: Worst Case, when calculating Big O we think worst case. Imagine an element being found in an array, we think
we need to run through all the elements of the array, and that is the worst case. (Big O(n))
We always care about what's the worst case scenario.

Rule 2: Drop constants ( e.g. in O(1 + n /2 + 100) becomes O(n))
O(a + 500000000) => O(n)

O(2n) becomes O(n) we will never see numbers, so we drop the number.

Rule 3: Different terms for inputs

```javascript
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(box) {
        console.log(box);
    });

    boxes2.forEach(function(box) {
        console.log(box);
    });
}
```
O(2n) so then O(n) but that's not correct then O(a + b) => there are two for loops but not for the same items.
a for the first for loop and b for the second for loop.

If loops are nested, then ? Rule 4


```javascript
// loging all pairs of an array

const boxes = ['a','b','c','d','e'];
    
function logAllPairsOfArray(array) {
    for(let i = 0; i < array.length; i++) {
        for( let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
} 

logAllPairsOfArray(boxes);

```
If we see nested loops, we use multiplication becomes O(n * n) => O(n^2);

O(n^2) Quadratic time, 2 elements we have 4 operations we have 4 elements we have 8 operations


Rule 4: Drop Non Dominants

as we worry about scale, we drop the non dominants, as (e.g. n^2 is more important as n grows);

Time 

1. operations
2. comparisons
3. looping
4. outside function call (function())



What is good code ?
1. [x] Readable
2. [x] Scalable
3. [x]    Speed
4. [x]    Memory
5. [x] 

Three Pillars of Code

1. [ ] Readable
2. [ ] Speed - Has big O time complexity
3. [ ] Memory - Space Complexity


Heap is where we store variables
Stack where we keep track of our function calls


What causes space complexity; what takes space

Variables
data structures 
function call
allocations

What is the space complexity ?

```javascript

function boo(n) {
    for (let i=0; i < n.length; i++) {
        console.log('boooo!!');
    }
}
```


Gotcha is that we are talking about additional space,
we don't care how big the input is, we do care, but in the 
function we don't have control over the input (n), we have control over the internal of what happens inside the functions.

We only do the variable creation let i =0 , we don't add any more memory; so we have a // O(1)

This has space complexity of O(1)

**_What about the following function_**

```javascript
function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i=0; i < n; i++) {
       hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // O(n) 

// returns an array with 6 items.

```

we create a new array, and based on the number of items in the input we create elements in the array.
We get a new array with 6 elements, so what is the space complexity, so what takes space.

if we remember what causes space

Variables
data structures
function call
allocations

In this function we create a data structure and variables
- Data Structures
- Variables 

Some time is about the tradeoffs of saving time or saving space.


Example. 

// Find the first tweet and find Nth tweet
// we dont know how the tweet are stores, but based on how they are store we may be able to grab 
```javascript
const array = ['hi','my','teddy']; 
array[0]; // oldest tweet // O(1) constant time
array[array.length-1]; // most recent tweet // O(1) constant time

```

if we need to compare dates ? This case may be more costly
```javascript
const array = [
    {
        tweet: 'hi',
        date: 2023
    },
    {
        tweet: 'my',
        date: 2014
    },
    {
        tweet: 'teddy',
        date: 2018
    }
]; 
array[0]; // oldest tweet // O(1) constant time
array[array.length-1]; // most recent tweet // O(1) constant time

```
 
and this example ?
```javascript
    'ahsdfalsdfasdfasdfasdfasdf'.length() // depends on the language implementation of length. // O(1)
```

In JavaScript there are many ways of doing loops in JavaScript

```javascript
const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('found nemo');
        }
    })
}

const findNemo3 = array => {
    for(let fish of array) {
        if (fish === 'nemo') {
            console.log('found nemo');
        }    
    }
}
```

As we can see some are more readable than others. 

Big O says
Which function or algorithm are best, we concern with Readable and Scalable (Big O).







