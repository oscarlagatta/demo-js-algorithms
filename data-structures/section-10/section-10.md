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
The advantage is that searching and lookup are easy because we can start at each node and compare the element we are
searching for to the current node, then move either down right or down left.

To insert or delete, we need to figure out where the element is located.

### The Problem with Binary Search Trees

![img.png](img.png)

All the nodes are being added to the right.

We have two types of trees:

1. Balanced
2. Unbalanced

We need to remember why an unbalanced tree is bad. Ideally, we want a balanced tree for performance optimization as
below:

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

A heap is a specialized type of tree-based data structure that has a heap property. There are two types: Min-Heap and
Max-Heap.

Heaps can be represented as an array where the parent-child relationship can be derived using index calculations. For a
node at index `i`, its children are at indexes `2i + 1` and `2i + 2`, and its parent is at index `(i - 1) // 2`.

```
        10
       /  \
     15    30
    /  \  /  \
   40  50 100 40
```

In the array representation, this min-heap is stored as [10, 15, 30, 40, 50, 100, 40].

### Binary Heaps

Why use them? They are great for comparative operations and are used in data storage and priority queues. They take the
least amount of space and have no concept of being unbalanced, as they use left-to-right insertion. They preserve the
order of insertion and can be implemented with arrays. The only guarantee is that the parent node is always greater than
the children.

Heaps are particularly useful for priority queues. While we assume that queues are FIFO (First In, First Out), priority
queues differ because each element has a priority. Elements with higher priority are served before those with lower
priority.

### Why Use a Binary Heap?

**1. Efficient Insertions and Deletions:**

- Binary heaps allow for efficient insertions and deletions of elements. The time complexity for these operations is O(
  log N), which is significantly faster than the O(N) time complexity for similar operations in an unsorted array or a
  simple linked list.

**2. Priority Queue Implementation:**

- Binary heaps are commonly used to implement priority queues, which are data structures where each element has a
  priority. In a priority queue, elements with higher priority are served before elements with lower priority. This is
  essential in scenarios where certain tasks need to be prioritized over others, such as in scheduling algorithms for
  operating systems.

**3. Optimal Space Utilization:**

- Binary heaps take up less space compared to other tree structures. They can be efficiently represented using arrays,
  where the parent-child relationship is maintained through simple index calculations. This array representation
  eliminates the need for additional pointers, reducing memory overhead.

**4. No Balance Required:**

- Unlike binary search trees, binary heaps do not require balancing. This simplifies their implementation and ensures
  consistent performance for insertions and deletions.

**5. Order Preservation:**

- Binary heaps preserve the order of insertion to some extent. Specifically, they maintain the heap property, where the
  parent node is always greater (in a max-heap) or smaller (in a min-heap) than its children. This property is crucial
  for efficiently retrieving the highest or lowest priority element.

**6. Heap Sort Algorithm:**

- Binary heaps are used in the heap sort algorithm, which is a comparison-based sorting technique. Heap sort has a time
  complexity of O(N log N) and is particularly useful when you need an in-place and non-recursive sorting algorithm.

**7. Real-Time Applications:**

- In real-time systems where tasks must be executed based on priority, binary heaps provide an efficient way to manage
  and retrieve tasks. They are used in applications such as CPU scheduling, bandwidth management in network routers, and
  simulation systems.

**8. Min-Heap and Max-Heap Flexibility:**

- Depending on the requirements, binary heaps can be configured as min-heaps (where the smallest element is the highest
  priority) or max-heaps (where the largest element is the highest priority). This flexibility allows them to be used in
  a variety of applications, such as implementing event-driven simulators or finding the k-th largest element in a
  dataset.

In summary, binary heaps are used because they offer efficient, reliable, and straightforward implementations for
managing priority-based data, optimizing space, and maintaining performance across various applications.

### Priority Queues

### What is a Priority Queue?

A priority queue is an abstract data type that operates similarly to a regular queue but with an added feature: each
element has a priority associated with it. Elements are served based on their priority rather than their order of
insertion. Higher priority elements are dequeued before lower priority elements.

### Types of Priority Queues

1. **Max-Priority Queue:** In a max-priority queue, the element with the highest priority is served first.
2. **Min-Priority Queue:** In a min-priority queue, the element with the lowest priority is served first.

### Implementations of Priority Queues

Priority queues can be implemented using several data structures, each with its own advantages and trade-offs:

1. **Binary Heap:**

- Binary heaps are the most common way to implement priority queues.
- They provide efficient insertion and deletion operations with O(log N) time complexity.
- A binary heap can be implemented as a max-heap (for max-priority queues) or a min-heap (for min-priority queues).

2. **Binary Search Tree (BST):**

- BSTs can also be used to implement priority queues, offering O(log N) time complexity for insertion and deletion.
- However, BSTs require balancing (e.g., AVL trees or Red-Black trees) to maintain performance.

3. **Fibonacci Heap:**

- Fibonacci heaps offer better amortized time complexity for some operations compared to binary heaps.
- They have an O(1) amortized time complexity for insertion and decrease-key operations and O(log N) for deletion.

4. **Unordered List:**

- An unordered list allows for O(1) insertion time but O(N) time complexity for finding and deleting the highest or
  lowest priority element.
- This implementation is usually inefficient for large datasets.

5. **Ordered List:**

- An ordered list maintains elements in sorted order, offering O(N) insertion time and O(1) deletion time.
- This is also typically inefficient for large datasets.

### Operations on a Priority Queue

**1. Insertion:**

- Add an element to the priority queue with a specified priority.
- In a binary heap, this involves adding the element at the end and then "bubbling up" to maintain the heap property.

**2. Find Max/Min:**

- Retrieve, but do not remove, the element with the highest (or lowest) priority.
- In a binary heap, this is simply the root element.

**3. Deletion:**

- Remove and return the element with the highest (or lowest) priority.
- In a binary heap, this involves removing the root element and then "bubbling down" to maintain the heap property.

**4. Decrease/Increase Key:**

- Adjust the priority of an element in the priority queue.
- This operation may involve "bubbling up" or "bubbling down" to maintain the heap property in a binary heap.

### Applications of Priority Queues

1. **Task Scheduling:**

- Priority queues are used in operating systems for task scheduling where tasks are prioritized based on importance or
  urgency.

2. **Graph Algorithms:**

- Algorithms like Dijkstra's shortest path and Prim's minimum spanning tree use priority queues to efficiently select
  the next vertex to process.

3. **Event-Driven Simulation:**

- Priority queues manage events in simulations, where each event is processed based on its scheduled time.

4. **Huffman Coding:**

- Huffman coding, used in data compression algorithms, employs priority queues to build the optimal prefix code.

5. **A* Search Algorithm:**

- The A* search algorithm, used in pathfinding and graph traversal, uses priority queues to explore nodes with the
  lowest estimated cost first.

### Advantages of Priority Queues

- **Efficient Priority Management:** Priority queues efficiently manage elements with different priorities, ensuring
  that high-priority elements are processed first.
- **Flexibility:** They can be adapted to different implementations depending on the specific performance requirements.
- **Wide Applications:** Priority queues are used in various applications, from computer science to operations research
  and logistics.

### Disadvantages of Priority Queues

- **Complexity:** Implementing and maintaining a priority queue, especially with more complex data structures like
  Fibonacci heaps, can be challenging.
- **Space Overhead:** Some implementations, like binary heaps, may have higher space overhead due to additional data
  structures used for managing priorities.

In summary, priority queues are powerful data structures for managing and processing elements based on priority. They
provide efficient mechanisms for insertion, deletion, and priority adjustment, making them essential for a wide range of
applications in computing and beyond.

### What is a Trie?

A trie, also known as a prefix tree or digital tree, is a type of tree data structure that is used to store a dynamic
set of strings, where the keys are usually strings. It is particularly efficient for searching words in a dictionary or
database.

### Structure of a Trie

- **Root:** The root node of a trie does not contain any character. It serves as the starting point for all the
  operations.
- **Nodes:** Each node in a trie represents a single character of the strings stored in the trie. Nodes are connected by
  edges.
- **Edges:** Edges represent the transition from one character to another. Each edge is labeled with a character.
- **End of Word Marker:** Nodes that represent the end of a word are often marked to distinguish them from nodes that
  are merely prefixes.

### Properties of a Trie

- **Prefix Matching:** Tries are particularly good at matching prefixes. This makes them suitable for autocomplete and
  spell-checking applications.
- **No Node is Duplicate:** Characters are not duplicated in the trie, meaning each node represents a unique prefix of
  the stored words.
- **Efficient Search:** Searching for a word or prefix in a trie has a time complexity of O(m), where m is the length of
  the word or prefix. This is because each character of the word is processed sequentially.

### Operations on a Trie

**1. Insertion:**

- To insert a word, start from the root node and for each character of the word, check if there is an edge from the
  current node to a child node labeled with that character.
- If such an edge exists, move to the child node.
- If such an edge does not exist, create a new node and add an edge labeled with the character.
- Mark the final node as the end of the word.

**2. Search:**

- To search for a word, start from the root and follow the edges corresponding to each character of the word.
- If you can follow edges for all characters and reach a node marked as the end of a word, the word exists in the trie.
- If you cannot follow an edge for any character, the word does not exist.

**3. Deletion:**

- To delete a word, follow the same steps as searching to reach the end node of the word.
- If the end node is reached, unmark it as the end of a word.
- Optionally, remove nodes that are no longer part of any word.

### Example

Let's insert the words "cat", "car", and "cart" into a trie.

```
         (root)
         /  \
       c     (other children)
      / \
     a   (other children)
    / \
   t   r
   |   |
  (end)t
       |
     (end)
```

**Explanation:**

- "cat" shares the common prefix "ca" with "car" and "cart".
- "car" is marked as the end of a word after "r".
- "cart" extends "car" with "t" and is marked as the end of a word after "t".

### Applications of Tries

- **Autocomplete Systems:** Efficiently suggest completions for a given prefix.
- **Spell Checkers:** Quickly find words with similar prefixes or detect misspellings.
- **IP Routing:** Store and search IP addresses efficiently.
- **DNA Sequencing:** Store and search genetic sequences that share common prefixes.
- **Word Games:** Facilitate fast word searches in games like Scrabble or Boggle.

### Advantages of Tries

- **Fast Prefix Searches:** Tries excel at prefix-based searches and can quickly find all words with a given prefix.
- **Memory Efficiency:** When storing a large number of words with shared prefixes, tries use memory efficiently by
  sharing common prefixes.

### Disadvantages of Tries

- **Space Complexity:** In the worst case, tries can use more memory than other data structures like hash tables,
  especially if there are many unique prefixes.
- **Complex Implementation:** Tries can be more complex to implement and manage compared to simpler data structures like
  arrays or linked lists.

In summary, tries are powerful data structures for managing a large set of strings, providing efficient prefix searches,
and supporting operations like insertion, search, and deletion with predictable time complexity.