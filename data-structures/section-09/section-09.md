# How JavaScript work?

What is a program ? 

- Allocate memory
- Parse and execute scripts
We now there is the js engine in Chrome Called V8. 
- THE v8 ENGINE has a:
  - MEMORY HEAP (creating variables)
  - CALL STACK (code read and executed)

But with all memory we have a limited amount, and leaks happens when have variables around and we forget to cleanup.
The Call stack we can have

```javascript
console.log(1);
console.log(2);
console.log(3);

```

The call stack reads and executes the script, and adds each command to the call stack and runs, then removes it from the stack.

Having a complex example like this
```javascript
const one = () => {
    const two = () => {
        console.log(4)
    }
    two();
}

one(); // 4 

```

// call stack

// console.log('4')
// two()
// one()

and then removes them from the top.


// JS is single threaded and none blocking
// only one call stack, whatever is at the top runs first. 
// Other languages can have multiple call stacks and called multi-threaded

// Js runs in single threaded environment,

// This is an example of a stack overflow.
// This is Recursion that keeps looping over and over with no ending, keep adding foo() to the call stack.

```javascript
function foo() {
    foo();
}
```

With a single threaded there may be a problem, with blocking tasks that need time to finish before the next line of code executes.
The website will freeze until the next line of code executes. So we need something NONE-BLOCKING

How do we do this ? 
Asynchronous to the rescue.

```javascript
console.log(1);
setTimeout(() => {
    console.log('2')
}, 2000);
console.log(3);
```

In order for JS to run we need more than a JS engine, we need A js RUNTIME ENVIRONMENT THAT has more things
- Web api 
- call back queues
- event loop


```javascript
console.log(1);
setTimeout(() => {
    console.log('2')
}, 2000); // PART OF THE WEB API
console.log(3);

console.log(2); // executes and moved out of the call stack.
// CALL STACK

setTimeout() // and poped out of the call stack, now the call stack is empty then goes to console.log(3)
// WEB API

callback() // of set timeout
// CALLBACK QUEUE

// EVENT LOOP
// checks if the callstack is empty ? do we have any callbacks ? 
// we have the callback(), so we move it to the call stack, and will run console.log('2'),
```

In JavaScript, the microtasks queue is a mechanism used to manage a specific type of asynchronous tasks that are executed after the currently executing script and before any other tasks in the task queue. Understanding the microtasks queue is important for comprehending how JavaScript handles asynchronous operations, particularly with promises.

### Key Points About Microtasks Queue

1. **Microtasks vs. Macrotasks**:

    - **Microtasks** are smaller tasks that need to be executed as soon as possible after the current operation completes. Examples include promise callbacks and `MutationObserver` callbacks.

    - **Macrotasks** (or simply tasks) are larger tasks like setTimeout, setInterval, I/O operations, and UI rendering events.

2. **Execution Order**:

    - When a JavaScript engine finishes executing the current script, it first processes all the microtasks before moving on to the next macrotask.

    - Microtasks are executed in the order they were added.

3. **Examples of Microtasks**:

    - **Promises**: When a promise is resolved or rejected, its associated callbacks (then/catch/finally handlers) are added to the microtasks queue.

    - **MutationObserver**: When DOM mutations are observed, the observer's callback is added to the microtasks queue.

4. **Event Loop**:

    - The event loop continuously checks for tasks to execute. After a macrotask is executed, the event loop processes all the microtasks in the microtasks queue before executing the next macrotask.

    - This ensures that microtasks are handled as soon as possible, leading to a more responsive and predictable asynchronous behavior.

### Example

Here's a simple example to illustrate how microtasks and macrotasks work:

```javascript

console.log('script start');
 
setTimeout(() => {

  console.log('setTimeout');

}, 0);
 
Promise.resolve().then(() => {

  console.log('promise1');

}).then(() => {

  console.log('promise2');

});
 
console.log('script end');

```

**Output**:

```

script start

script end

promise1

promise2

setTimeout

```

### Explanation

- **script start** and **script end** are logged synchronously as the script runs.

- The `setTimeout` callback is added to the macrotasks queue and will be executed after the current script and all microtasks are completed.

- The promise callbacks are added to the microtasks queue.

- After the synchronous code completes, the microtasks queue is processed, logging **promise1** and **promise2**.

- Finally, the `setTimeout` callback is executed, logging **setTimeout**.

### Importance

The microtasks queue allows JavaScript to handle asynchronous operations more efficiently and ensures that certain tasks (like promise resolutions) are handled as soon as possible, maintaining a smooth and responsive application experience.

Understanding the distinction between microtasks and macrotasks, and how the event loop processes them, is crucial for writing performant and predictable asynchronous JavaScript code.
 