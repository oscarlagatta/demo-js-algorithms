Recursion

Recursion

Tail recursion - way to set up recursive function, that impacts space complexity

Normal recursion space: O(n)
Tail recursion space: O(1)

Recursion for prime number ?

Tail Recursion space: O(1)

```javascript
function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}


tailFactorial(4);
tailFactorial(4, 1);
tailFactorial(3, 4);
tailFactorial(2, 12);
tailFactorial(1, 24);
tailFactorial(0, 24);

```

The key is the second recursion base case, ` return tailFactorial(x - 1, totalSoFar * x);`
we return the entire thing which is the tailFactorial. So nothing is waiting for the results as
with the first factorial example where we return `return x * factorial(x-1);`
Here are individual function calls with all of their values.

### Tail Recursion

Tail recursion is a special case of recursion where the recursive call is the last operation in the function. This means
that no further computation is needed after the recursive call returns. Tail recursion can be optimized by the compiler
or interpreter to be as efficient as iteration, avoiding the buildup of stack frames for each recursive call.

Tail Recursion with the Factorial Function

Let's analyze your tailFactorial function:

```javascript
function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}

```

1. Parameters:

    - `x`: The number for which we want to calculate the factorial.
    - `totalSoFar`: An accumulator that keeps the running total of the factorial calculation. It is initialized to 1.

2. Base Case:

    - `if (x === 0)`: When x reaches 0, the function returns the accumulated total (totalSoFar).
      This is the stopping condition for the recursion.

3. Recursive Case:

    - return tailFactorial(x - 1, totalSoFar * x): The function calls itself with:
        - x - 1: Decrements the value of x.
        - totalSoFar * x: Updates the accumulator with the product of totalSoFar and the current x.

The call stack for tailFactorial(5) can be optimized to avoid growing:

    tailFactorial(5, 1)
    tailFactorial(4, 5)
    tailFactorial(3, 20)
    tailFactorial(2, 60)
    tailFactorial(1, 120)
    tailFactorial(0, 120) returns 120

## Tail Call Optimization (TCO)

In environments that support TCO (like some JavaScript engines), the stack frame for the current function call can be
replaced with the stack frame for the next function call if the current call is in tail position (i.e., the last action
of the function). This means the function doesn't need to unwind the stack in the traditional sense, as it doesn't
accumulate additional frames:

    - tailFactorial(5, 1) calls tailFactorial(4, 5) reusing the same stack frame.
    - tailFactorial(4, 5) calls tailFactorial(3, 20) reusing the same stack frame.
    - This continues until the base case is reached.

When the base case tailFactorial(0, 120) is reached, it simply returns the result directly.
Without TCO

If the environment does not support TCO, the function would still build up stack frames, and it would unwind them
similarly to traditional recursion, though the benefits of tail recursion (clearer code, easier transformation to
iteration) still apply.
Conclusion

In a tail-recursive function with TCO:

    - The recursive call reuses the current function's stack frame.
    - There is no stack unwinding in the traditional sense because the stack doesn't grow.
    - Once the base case is reached, the result is returned directly.

In environments without TCO:

    - The stack still grows, but the structure of tail recursion makes it easier to convert to an iterative form, reducing the potential for stack overflow.