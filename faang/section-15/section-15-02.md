Quick Sort

k = 2

[5, 3, 1, 6, 4, 2]

Shifting elements around as we need to work with pointers.

```javascript
/**
 * Function to swap elements in an array at two specified indices.
 * Swap function (swap(array, i, j)): This function takes an array and two indices, i and j.
 * It swaps the elements at these two indices in the array.
 *
 *
 * @param {Array} array - The array in which the elements will be swapped.
 * @param {number} i - The index of the first element to be swapped.
 * @param {number} j - The index of the second element to be swapped.
 * @returns {undefined} - This function does not return anything.
 */
const swap = function (array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

/**
 * Partitions an array based on a pivot element.
 *
 *
 * This function takes an array and two indices, left and right.
 * It uses a pivot element to partition the array so that all the elements less than the pivot element are
 * on its left and all the elements greater than the pivot element are on its right.
 *
 * @param {Array} array - The array to be partitioned.
 * @param {number} left - The starting index of the partition.
 * @param {number} right - The ending index of the partition.
 *
 * @returns {number} - The index of the partition element.
 */
const partition = function (array, left, right) {
    const pivotElement = array[right];
    let partitionIndex = left;
    for (var j = left; j < right; j++) {
        if (array[j] < pivotElement) {
            // swap positions of i and j
            swap(array, partitionIndex, j);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, right);

    return partitionIndex;
}

/**
 * Applies the quicksort algorithm to sort an array in ascending order.
 * This function sorts an array in place, using the quicksort algorithm.
 * It first partitions the array using the partition() function,
 * and then recursively applies itself to the two halves of the array
 * (the elements on the left and right of the partition).
 *
 * @param {Array} array - The array to be sorted.
 * @param {number} leftStartingIndex - The starting index for the portion of the array to be sorted.
 * @param {number} rightEndIndex - The ending index for the portion of the array to be sorted.
 */
const quickSelect = function (array, leftStartingIndex, rightEndIndex) {

    // base case, we don't run quick sort if we get a portion of the array where is just one element
    // when they overal
    if (left < right) {
        const partitionIndex = partition(array, leftStartingIndex, rightEndIndex);

        // left 
        quickSelect(array, leftStartingIndex, partitionIndex - 1);
        // right
        quickSelect(array, partitionIndex + 1, rightEndIndex);
    }
}

/**
 * Finds the kth largest element in a given array.
 *
 * This function sorts an array using the quickSelect() function and returns the kth largest element.
 * It calculates the index of the kth largest element by subtracting k from the length of the array,
 * since the array is sorted in ascending order
 *
 * @param {Array} array - The input array.
 * @param {number} kth - The position of the largest element to find.
 * @returns {*} - The kth largest element of the array.
 */
const getKthLargest = function (array, kth) {
    const indexToFind = array.length - kth;
    quickSelect(array, 0, arrayl.length - 1);

    return array[indexToFind];
}


```

Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the
other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

## Time Complexity:

Worst-case scenario: The worst-case scenario happens when the pivot happens to be the smallest or largest element in the
list, causing an uneven partition. For this, the time complexity is O(n^2).
Best-case scenario: This happens when the pivot is the median of the list causing a equal partition. It has a time
complexity of O(n log n).
Average case: Generally, quicksort performs well on average and has a complexity of O(n log n).
Space Complexity: Quicksort has a space complexity of O(log n) because it uses a recursive approach.
Now let's consider getKthLargest function which uses the QuickSelect algorithm (a variant of the Quicksort algorithm) to
find the kth largest element.

## Time Complexity:

Worst-case scenario: O(n^2), when we are extremely unlucky with pivot choices.
Best-case scenario and Average case: O(n), making this algorithm suitable for large datasets.
Finally, space complexity of this entire code will be O(log n) that is due to quickSelect function which works on divide
and conquer approach and recursive in nature. Individual, swap, partition & getKthLargest functions use constant amount
of extra space, so they all have a space complexity of O(1).
