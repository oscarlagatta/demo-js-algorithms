// Recursion

what is recursion, eg looking for a file, looking for folders recursively for the file with `ls -R`

When we define something that makes reference to itself.

Recursion is good where we have repeated sub-tasks to do. Concept for searching and sorting.
// e.b. Binary search Traverse function.
// e.g. DOM traversal
// e.g. In JavaScript when we have objects nested inside objects

Stack overflow is a usual problem we could face when using recursion.

TWO PATHS, RECURSIVE STEP AND BASE CASE (STOP CALLING THE FUNCTION)

Identify the base case
Identify the recursive case
Get closer and closer and return
when needed. usually you have 2 returns

## The following function returns `undefined` why ???

```javascript
let counter = 0;

function inception() {
    if (counter > 3) {
        return 'done';
    }
    counter++;
    inception(); // Corrected line
}

console.log(inception()); // This will now print 'done'
```

The function `inception` is returning `undefined` because of how it handles the recursive calls. Let's break it down
step by step:

1. **Function Definition**: The function `inception` is defined to recursively increment a counter and check if it
   exceeds a certain value.
2. **Recursive Calls**: Within the function, after incrementing the counter, `inception` calls itself recursively but
   does not handle the return value of the recursive call.
3. **Base Case**: When the base case (`counter > 3`) is met, the function returns `'done'`.

However, in each recursive call, the return value is not captured or returned. Therefore, when the recursive call
finishes and the control returns to the previous call, that previous call does not have a return value to propagate back
up the call stack.

Here's the corrected function:

```javascript
let counter = 0;

function inception() {
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception(); // Corrected line
}

console.log(inception()); // This will now print 'done'
```

### Explanation

- **Recursive Return Propagation**: By adding `return inception();`, each call to `inception` will return the value from
  the deeper recursive call, eventually returning `'done'` all the way back up the call stack to the initial call.
- **Without the Return**: Without returning the result of the recursive call, the function implicitly
  returns `undefined` after making the recursive call, thus never passing back the `'done'` value.

### How it Works

1. **Initial Call**: `inception()` is called, `counter` is 0.
2. **First Recursive Call**: `counter` is incremented to 1, `inception()` is called again.
3. **Second Recursive Call**: `counter` is incremented to 2, `inception()` is called again.
4. **Third Recursive Call**: `counter` is incremented to 3, `inception()` is called again.
5. **Fourth Recursive Call**: `counter` is incremented to 4, the condition `counter > 3` is met, and `'done'` is
   returned.
6. **Return Propagation**: Each call returns the value `'done'` back up the call stack, so the initial call
   to `inception()` ultimately returns `'done'`.

By adding `return inception();` in the function, you ensure that the return value from the base case is propagated back
through each level of the recursion.

In a recursive call, the Last In, First Out (LIFO) principle of the stack is particularly important. Let's delve into
how this works with a detailed example to illustrate the behavior of the call stack during recursive calls.

### Example: Recursive Function

Consider a recursive function that calculates the factorial of a number:

```javascript
function factorial(n) {
    if (n === 0) {  // Base Case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive Call
}

console.log(factorial(5));  // This will print 120
```

### Call Stack Behavior in Recursion

Let's trace the execution of `factorial(5)` step-by-step:

1. **Initial Call**: `factorial(5)`
    - Stack: [factorial(5)]
2. **First Recursive Call**: `factorial(4)`
    - Stack: [factorial(5), factorial(4)]
3. **Second Recursive Call**: `factorial(3)`
    - Stack: [factorial(5), factorial(4), factorial(3)]
4. **Third Recursive Call**: `factorial(2)`
    - Stack: [factorial(5), factorial(4), factorial(3), factorial(2)]
5. **Fourth Recursive Call**: `factorial(1)`
    - Stack: [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)]
6. **Fifth Recursive Call**: `factorial(0)` (base case)
    - Stack: [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1), factorial(0)]

When `factorial(0)` returns 1, the stack starts to unwind, adhering to the LIFO principle:

1. **Return from `factorial(0)`**:
    - Stack: [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)]
    - `factorial(1)` continues with `return 1 * 1`, returning 1.
2. **Return from `factorial(1)`**:
    - Stack: [factorial(5), factorial(4), factorial(3), factorial(2)]
    - `factorial(2)` continues with `return 2 * 1`, returning 2.
3. **Return from `factorial(2)`**:
    - Stack: [factorial(5), factorial(4), factorial(3)]
    - `factorial(3)` continues with `return 3 * 2`, returning 6.
4. **Return from `factorial(3)`**:
    - Stack: [factorial(5), factorial(4)]
    - `factorial(4)` continues with `return 4 * 6`, returning 24.
5. **Return from `factorial(4)`**:
    - Stack: [factorial(5)]
    - `factorial(5)` continues with `return 5 * 24`, returning 120.
6. **Return from `factorial(5)`**:
    - Stack: []
    - The result 120 is printed.

### Summary

- **LIFO Principle**: Each recursive call pushes a new frame onto the stack, and the most recent call is always the
  first to return.
- **Base Case**: The recursion stops when the base case is reached. This is the condition that prevents infinite
  recursion.
- **Unwinding the Stack**: After reaching the base case, the stack unwinds, returning values back up the call chain in
  reverse order of the calls.

### Visual Representation

Here's a visual representation of the call stack during the execution of `factorial(5)`:

```
Initial Call:
factorial(5)
-------------
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
factorial(0)

Unwinding the Stack:
factorial(0) returns 1
factorial(1) returns 1
factorial(2) returns 2
factorial(3) returns 6
factorial(4) returns 24
factorial(5) returns 120
```

Each step shows how the LIFO principle ensures that the most recent call is the first to complete and return its result,
ultimately leading to the final answer.

## why would you ever use recursive solution

Anything you do with a recursion CAN be done iteratively (loop).

## Every time you are using a tree or converting Something into a tree, consider recursion

1. Divided into a number of sub-problems that are smaller instances of the same problem
2. Each instance of the sub-problem is identical in nature
3. The solutions of each sub-problem can be combined to solve the problem at hand.

## Divide and conquer using Recursion

Another example

```javascript
function reverseString(str) {

}

reverseString("yoyo master");

function reverseStringRecursive(str) {

}

reverseStringRecursive("yoyo master");
```