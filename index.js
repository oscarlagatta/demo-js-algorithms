// import {findTwoSum, findTwoSum2} from "./faang/section-01/section-01-00.js";
import Graph from "./data-structures/section-11/section-11-00.js";
import {isValidPalindrome} from "./faang/section-07/js/section-07-00.js";
import {minRemoveToMakeValid} from "./faang/section-13/section-13-00.js";


// console.log(isValidPalindrome('Eva, can I see bees in a cave'));

// console.log(findTwoSum2([1,3,7,9,2], 11));

//minRemoveToMakeValid('a)bc(de)');
const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
