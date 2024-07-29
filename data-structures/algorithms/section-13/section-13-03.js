/*
* The function takes as input an array to be sorted.
An outer loop iterates over each element in the array. This element is the one that we want to insert into the correct position.
There are two cases in the sorting process:
If the current element is smaller than the first element in the sorted section of the array, it's removed from its current position and inserted at the start of the array.
If the current element is larger than the first element, an inner loop checks for the correct position to insert the element in the sorted part of the array.
This is done by moving the element to the position where it is greater than the preceding element and less than the following one.
This process continues until all elements in the array are sorted and finally, the sorted array is returned.
*
* */

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
    return array;
}

export default insertionSort;