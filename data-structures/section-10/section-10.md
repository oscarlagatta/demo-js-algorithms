# **Trees Data Structure**

**Perfect Binary Tree**: All leaf nodes are full, and there is one root. The bottom layer is completely filled.

**Full Binary Tree**: A node has 0 or 2 children but never 1 child.

## Binary Search Tree

- Lookup: O(log N)
- Insert: O(log N)
- Delete: O(log N)

### Number of Nodes at Each Level

Level 0: \(2^0 = 1\)  
Level 1: \(2^1 = 2\)  
Level 2: \(2^2 = 4\)  
Level 3: \(2^3 = 8\) // nodes that we have to check to search for something

**Total number of nodes = \(2^{\text{height}} - 1\)**  
(-1) because there are 7 nodes at the 3rd level.  
**Log nodes = height**

\( \log 100 = 2\) because \(10^2 = 100\)

## Binary Search Tree (Subset of the Binary Tree)

Binary search trees are good at searching, great for comparing things, and preserve relationships.

```
        101
      /     \
    33      105
  /    \    /  \
 9     37 104   144
```

All child nodes to the right of the root node must be greater. If we go to the left, the values decrease.  
A node can only have up to two children.  
The advantage is that searching and lookup are easy because we can start at each node and compare the element we are searching for to the current node, then move either down right or down left.

To insert or delete, we need to figure out where the element is located.

### The Problem with Binary Search Trees

![img.png](img.png)

All the nodes are being added to the right.

We have two types of trees:
1. Balanced
2. Unbalanced

We need to remember why an unbalanced tree is bad. Ideally, we want a balanced tree for performance optimization as below:
- Lookup: O(log N)
- Insert: O(log N)
- Delete: O(log N)

### How Do You Balance the Tree?

It can get complicated to do so, and in an interview, they'd like to discuss the trade-offs due to the limited time.

Binary Search Trees perform very well.

**Pros:**
- Better than O(n)
- Ordered
- Flexible size

**Cons:**
- No O(1) operations

There is a library called Arboreal JS that helps with tree implementation.
https://github.com/afiore/arboreal

Balancing a tree involves two types:
1. AVL Tree (no need for code as we typically use a library that implements them)
2. Red-Black Tree

### AVL Trees
- https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
- https://www.cs.usfca.edu/~galles/visualization/AVLtree.html

### Red-Black Trees
- https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
- https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5

## Heaps

A heap is a specialized type of tree-based data structure that has a heap property. There are two types: Min-Heap and Max-Heap.

Heaps can be represented as an array where the parent-child relationship can be derived using index calculations. For a node at index `i`, its children are at indexes `2i + 1` and `2i + 2`, and its parent is at index `(i - 1) // 2`.

```
        10
       /  \
     15    30
    /  \  /  \
   40  50 100 40
```

In the array representation, this min-heap is stored as [10, 15, 30, 40, 50, 100, 40].

### Binary Heaps
Why use them? They are great for comparative operations and are used in data storage and priority queues.

### Priority Queues