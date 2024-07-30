# Searching and Traversal

1. Sorting
2. Dynamic Programming
3. BFS + DFS (Searching)
4. Recursion


* Linear Search
* Binary Search
* Depth First Search
* Breadth First Search

Linear Search or sequential Search, finding value in a list.
Look one by one in the list, best case scenario we find it in a O(1) because is at the begninning of the list,
worst is O(n) the element is at the end.

```javascript
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

beasts.indexOf('Godzilla')

beasts.findIndex(function (item) {
    return item === 'Godzilla'
});

beasts.find(function (item) {
    return item === 'Godzilla'
});

beasts.includes('Godzilla')
```

Would it help if the list is sorted. Is a better way to find a number in this list
1, 4, 6, 9, 12, 34, 45 ?

We can use something like binary search, we start in the middle 9, and is higher than 8 then we go to the right, and
remove all that is on the left.

If it's sorted we can do better than O(n) or linear time.


