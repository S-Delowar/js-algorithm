function fibonacciNth(n) {
    let current = 1;
    let previous = 0;

    if(n === 1) {
        return 1;
    }

    let iterationCount = n - 1;

    while(iterationCount) {
        current += previous;
        previous = current - previous;
        iterationCount--;
    }
    return current;
}

const fib5th = fibonacciNth(4);  //3
console.log(fib5th)

const fib11th = fibonacciNth(11);  //89
console.log(fib11th);