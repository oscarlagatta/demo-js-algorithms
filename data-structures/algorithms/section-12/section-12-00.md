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


The function `inception` is returning `undefined` because of how it handles the recursive calls. Let's break it down step by step:

1. **Function Definition**: The function `inception` is defined to recursively increment a counter and check if it exceeds a certain value.
2. **Recursive Calls**: Within the function, after incrementing the counter, `inception` calls itself recursively but does not handle the return value of the recursive call.
3. **Base Case**: When the base case (`counter > 3`) is met, the function returns `'done'`.

However, in each recursive call, the return value is not captured or returned. Therefore, when the recursive call finishes and the control returns to the previous call, that previous call does not have a return value to propagate back up the call stack.

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

- **Recursive Return Propagation**: By adding `return inception();`, each call to `inception` will return the value from the deeper recursive call, eventually returning `'done'` all the way back up the call stack to the initial call.
- **Without the Return**: Without returning the result of the recursive call, the function implicitly returns `undefined` after making the recursive call, thus never passing back the `'done'` value.

### How it Works

1. **Initial Call**: `inception()` is called, `counter` is 0.
2. **First Recursive Call**: `counter` is incremented to 1, `inception()` is called again.
3. **Second Recursive Call**: `counter` is incremented to 2, `inception()` is called again.
4. **Third Recursive Call**: `counter` is incremented to 3, `inception()` is called again.
5. **Fourth Recursive Call**: `counter` is incremented to 4, the condition `counter > 3` is met, and `'done'` is returned.
6. **Return Propagation**: Each call returns the value `'done'` back up the call stack, so the initial call to `inception()` ultimately returns `'done'`.

By adding `return inception();` in the function, you ensure that the return value from the base case is propagated back through each level of the recursion.
```javascript

```