function fibonacci(n) {
    let fibArr = [1];
    let current = 1;
    let previous = 0;

    if(n === 1) {
        return fibArr;
    }

    let iterationCounter = n - 1;
    while(iterationCounter) {
        current += previous;
        previous = current - previous;

        fibArr.push(current);
        iterationCounter--;
    }

    return fibArr;
}

const array = fibonacci(5);  //[ 1, 1, 2, 3, 5 ]
const array2 = fibonacci(20);

console.log(array);
console.log(array2);