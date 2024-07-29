// Sorting, what's all the fuss with sorting ?

MOst of the time we sort data or process it. Doing sorting is important to know which sorting we should use.

Bubble sort
Insertion sort
Selection sort
Merge sort
Quick sort


The issue with sort

```javascript
const letters = ['a', 'b', 'z', 'e', 'r', 'b']

const basket = [2,65,34,2,1,7,8];

basket.sort(); // [1,2,2,34,65,7,8] Sort converts to strings

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0)); // produces a unicode value which is used to order the elements.
console.log('34'.charCodeAt(0));
console.log('65'.charCodeAt(0));

/*
> 50
> 54
> 51
> 54
* */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
letters.sort(function(a,b) {
    return a.localeCompare(b);
});

basket.sort(function(a,b) {
    return a-b;
});
```




If you'd like to learn about heap sort here's the link https://brilliant.org/wiki/heap-sort/

Quick Sort vs Heap Sort https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort







