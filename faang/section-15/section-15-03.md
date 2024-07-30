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
 * Finds the element at the given index in the array using Quick Select algorithm.
 *
 * @param {Array} array - The input array.
 * @param {number} left - The left index of the subarray to be considered.
 * @param {number} right - The right index of the subarray to be considered.
 * @param {number} idxToFind - The index of the element to find.
 * @returns {*} The element at the given index in the array.
 */
const quickSelect = function (array, left, right, idxToFind) {

    if (left < right) {
        const partitionIndex = partition(array, left, right);

        if (partitionIndex === idxToFind) {
            return array[partitionIndex];
        } else if (idxToFind < partitionIndex) {
            return quickSelect(array, left, partitionIndex - 1, idxToFind);
        } else {
            return quickSelect(array, partitionIndex + 1, right, idxToFind);
        }
    }
}


/**
 * Returns the kth largest element from an array.
 *
 * @param {Array} array - The input array.
 * @param {number} kth - The kth largest element to find.
 * @returns {number} - The kth largest element from the array.
 */
const getKthLargest = function (array, kth) {
    const indexToFind = array.length - kth;
    quickSelect(array, 0, array.length - 1, indexToFind);

    return array[indexToFind];
}


```

## Time Complexity

The quickselect algorithm runs in linear time (O(n)) for average cases, because, similar to quicksort, it employs the
divide-and-conquer technique. The input list is divided into two halves (those less than the pivot and those greater
than the pivot), but unlike quicksort, it discards one half and continues the process on the other half. The discarded
half does not contribute to the complexity making it an average O(n) time complexity.
However, in the worst-case scenario (i.e. when the input array is already sorted or reverse sorted), the time complexity
can be quadratic (O(n^2)) because in every partitioning step, one part becomes empty and we keep on partitioning the
part with n-1 elements.

## Space Complexity

Space complexity is O(1) because it performs the operation in place. The partition process splits the input and then
recursively processes the pieces. Because it only needs to deal with one piece at a time, the added space complexity is
constant, so the algorithm is an in-place sorting algorithm (uses only a constant amount of space in addition to the
input arrays). The constant space is for variables and indices.
These complexities apply to all the included functions.
For example, swap() function makes it possible to swap two values in an array in-place, without any additional memory
requirement, thus it has O(1) space complexity.
Similarly, the quickSelect() function calls itself recursively, but only on one half of the array, not both halves like
a typical divide-and-conquer algorithm, thus it has O(n) average time complexity, but O(n^2) in the worst-case.