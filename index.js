// import {findTwoSum, findTwoSum2} from "./faang/section-01/section-01-00.js";
import insertionSort from "./data-structures/algorithms/section-13/section-13-03.js";
import mergeSort from "./data-structures/algorithms/section-13/section-13-04.js";
import mergesort from "./data-structures/algorithms/section-13/section-13-04.js";


// console.log(isValidPalindrome('Eva, can I see bees in a cave'));

// console.log(findTwoSum2([1,3,7,9,2], 11));

//minRemoveToMakeValid('a)bc(de)');
// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');
//
// myGraph.showConnections();
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// bubbleSort(numbers);
// console.log(numbers);

// insertionSort(numbers);
// console.log(numbers);

const answer = mergeSort(numbers);
console.log(answer);
