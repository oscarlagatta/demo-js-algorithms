## Interview

1. Analytic Skills
2. Coding Skills
3. Technical Skills
4. Communication Skills

## Data Structures

* Arrays
* Stacks
* Queues
* Linked Lists
* Trees
* Graphs
* Hash Tables

## Algorithms

* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

Given 2 arrays create a function that lets a user know (true/false) whether these two arrays contain any common items

for example

```javascript
// const array1 = ['a', 'b','c','x']
// const array2 = ['z','y', 'i']
// should return false
//
//
// const array1 = ['a', 'b','c','x']
// const array2 = ['z','y', 'x']
// should return true


// 2 parameters
// should return true false
// we may ask how large the array can get, so we don't have to worry on time complexity or space complexity
// or ask what is more important 1. Time complexity or 2. Space complexity
// interviewer says arrays have no size limit

function containsCommonItem(arr1, arr2) {
    for(let i=0;i<arr1.length; i++) {
        for (let j=0; j<arr2.length;j++) {
            if (arr1[i] == arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

contains(['a', 'b','c','x'], ['z','y', 'x']);

// We know we have a big O of O(a*b)

// we may have a different solution
/*
what if we have a function that takes 1st array an concert it to an object that 
will contain
{
    a: true,
    b: true,
    c: true,
    x: true
}

we can use the object with array2 to check each item with the object
array2[index] === obj.properties

so now we don't need to loop through the first array as is now an object
* */

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    let map = {};
    
    for (let i=0;i<arr1.length;i++) {
        if(!map[arr1[i]]) {
            const item = array[i];
            map[item] = true;
        }
    }
    console.log(map);

    // loop through second array and check if item in second array exists on created object.
    for(let j=0;j<arr2.length;j++) {
        if(map[arr2[j]]) {
            return true
        }
    }
    return false
        
    // the difference with the previous solution is that we now don't have nested loops
    
}

// WE CAN IMPROVE BASED ON SPECIFIC JAVASCRIPT METHODS

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}


```

























