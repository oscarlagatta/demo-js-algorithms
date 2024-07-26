let counter = 0;
function inception() {
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception(); // Corrected line
}

console.log(inception()); // This will now print 'done'

// factorial iterative
function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer  = answer * i;
    }
    return answer;
}

// factorial of a number
function findFactorialRecursive(n) {
    if ( n === 0) { // base case
        return 1;
    }
    return n * findFactorialRecursive(n-1); // recursive call
}

function fibonacciIterative(n) {
    let arr = [0,1];

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2]+ arr[i-1]);
    }
    return arr[n];
}
// 0, 1, 1, 2, 3, 5, 8
function fibonacciRecursive(n) {

    if (n ===  0) {
        return 0;
    }

    if ( n === 1) {
        return 1;
    }
    //
    // if ( n < 2) { // base condition
    //     return n;
    // }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(6))
/*
* 1. Initial call `fibonacci(6)
*
*   Stack: [fibonacci(6)]
*   Needs to calculate `fibonacci(5) and fibonacci(4)`
*
* 2. `fibonacci(5)`
*     Stack: [fibonacci(6), fibonacci(5)]
*     needs to calculate fibonacci(4) and fibonacci(3)
*    `fibonacci(4)`
*     Stack: [fibonacci(6), fibonacci(5), fibonacci(4)]
*
* 3. Deeper Recursive call
*    - Continue the process until you reach the base cases:
*       - `fibonacci(3)
*       Stack: [fibonacci(6), fibonacci(5), fibonacci(4), fibonacci(3)]
*       Needs to calculate fibonacci(2) and fibonacci(1)
* 4. Base Cases:
*    Eventually, the function will call `fibonacci(1) and fibonacci(0) which are base cases
*
*    fibonacci(1) => returns 1
*    fibonacci(0) => returns 0
*
* 5. Unwinding the Stack
*
*   Now the function starts returning values and the stack unwinds
*   `fibonacci(2) returns `fibonacci(1) + fibonacci(0) which is 1 + 0 = 1
*   `fibonacci(3) returns `fibonacci(2) + fibonacci(1) which is 1 + 1 = 1
*    continue this until you get back to `fibonacci(6)
*
// fibonacci(6)
// ├── fibonacci(5)
// │   ├── fibonacci(4)
// │   │   ├── fibonacci(3)
// │   │   │   ├── fibonacci(2)
// │   │   │   │   ├── fibonacci(1) = 1
// │   │   │   │   └── fibonacci(0) = 0
// │   │   │   └── fibonacci(2) = 1 + 0 = 1
// │   │   ├── fibonacci(2) = 1
// │   │   └── fibonacci(3) = 1 + 1 = 2
// │   ├── fibonacci(3) = 2
// │   └── fibonacci(4) = 2 + 1 = 3
// ├── fibonacci(4) = 3
// └── fibonacci(5) = 3 + 2 = 5
// └── fibonacci(6) = 5 + 3 = 8
* */


