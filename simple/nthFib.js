/**
 * fibonacci nth number counter in recursion
 * @param n: int
 * @returns {number}: nth Fibonacci number
 */
function fibonacciRecursion(n) {
    if (n === 1 || n === 0) {
        return n;
    } else {
        return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
    }
}

/**
 * fibonacci nth number counter in dynamic programming
 * @param n: int
 * @returns {number}: nth Fibonacci number
 */
function fibonacciDynamic(n) {
    fibArray = [0, 1]
    for (i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[n];
}

(function (n) {
    console.log(fibonacciRecursion(n));
    console.log(fibonacciDynamic(n));
})(20);

