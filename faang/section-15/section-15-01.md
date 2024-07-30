// Sorting takes data models, like an array, and assumes data is not ordered.

We put them into a format that is a known pattern as smallest to largest.
Once it's order we have a predictable pattern to follow with the data.

`Given an unsorted array, return the kth largest element. It is the kth larges element
in sorted order, not the kth distinct element.`

k =2 and array [5,3,1,6,4,2]
sorted looks like [1,2,3,4,5,6], starting from the very right we can move two elements over and gives the second largest
element.
so the result number is 5.

being k = 4 if we have this array [2,3,1,2,4,2] sorted will be [1,2,2,2,3,4], if we only consider distinct element,
the 4 largest number is 1, we consider still all the numbers. We consider all the elements and that will be the 2nd 2.

#### Verify constraints

* Can we get an array where is k is larger than the array length ?
    * No, assume answer is always available

#### Test cases

1. array [5,3,1,6,4,2] where k = 2 resulting in  [1,2,3,4,5,6], and being the result the number 5.
2. array [2,3,1,2,4,2] where k = 4 resulting in  [1,2,2,2,3,4]  and being the result the number 2.
3. array [3] k =1 results in 3.

We want to find the final resting place of the last element of the array, knowing what we look for there are certain 
insights we can see, we know that 2 is in the final place as long every element to the right is greater and every element at
the left is less than 2.

