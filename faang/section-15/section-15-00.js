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