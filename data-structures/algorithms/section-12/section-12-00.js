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

function fibonacciRecursive(n) {
    if ( n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}


