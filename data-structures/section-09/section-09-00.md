# Stacks and Queues

Are called linear data structures, only one data element can directly reached.
These are very similar because can be implemented in similar way, and the diff is how the elements are removed.

We use stack data structures to push, pick, pop; Why would we use this if it's limiting.
Unlike arrays and linked list with stacks and queues we have less operations.

### Stacks

we can think of them as plates, with a LIFO, Last In, First Out.
We can only touch the top plate, cannot access the bottom. 

Why is useful ?
Good when we need to know the last value seen or added, and important in very specific languages.
Most program languages are modelled with the stack in mind, where we can check the call stack of functions.

Another useful way is something like Browser History.
Or writing piece of text, and UNDO.

we place the items in memory and the last will be at the top

We have the following actions

lookup O(n)
pop O(n)  // Remove the last item
push O(1) // Add an Item
peek O(1) // See the top item


## Queues

Like an entrance to a roller coaster, the first in line goes first, then the second and the third etc.

Is the opposite to stacks, because we access in FIFO, First In, First Out.

Restaurant apps uses queues, Uber also when we want to grab a ride, and the most common example is a printer where many people access the printer, the first person who clicked print will have the print first.

Operations

lookup O(1)
enqueue O(1) 
dequeue O(1) // takes the first item out
peek // O(1) // what's the first item to come out

Why would you not use an array for this ? 
It's not efficient, if array unshift we need to shift all the indexes, creating a queue with arrays is bad.

