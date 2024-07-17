Linked Lists
Try them here https://visualgo.net/en/list

Singly and Doubly linked lists

What is a Linked list, is a list that is linked =-) 
A singly linked list, is a set of nodes, has two elements the value and the pointer to the next node.
First node is called the HEAD, And the last node is called the TAIL.

LINKED LISTS are NULL terminated, the last node points to NULL.


```javascript
const baset = ['apples', 'grapes', 'pears'];
```

linked list: apples ==> grapes ==> pears

apples
8947 -> grapes
         8742 --> pears
                    372 --> null

            
WHY ARE BETTER THAN HASH TABLES OR ARRAYS ?

Linked list has a lose structure, we can insert values in the middle of the list, and the same applies for deleting a node.
Traversal is equal to Arrays, but we don't know when it will end, as we need to find the tail.
Array has an advantage where cache memory is located next to each other, link lists are scattered all over memory.

Compared with hash tables we don't need to do unshifting or moving indexes.

Linked lists

prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)


Pointers => is a reference to another place in memory, node or object, 

```javascript
// let obj1 = {
//     a: true,
// }
// obj1.a = 'booya'; // this will change also obj2
// delete obj1;
// let obj2 = obj1; // we created a pointer; a reference to an object obj1


// console.log('1',obj1);
console.log('2',obj2);



```