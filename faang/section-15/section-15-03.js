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