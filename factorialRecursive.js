function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}


const output = factorialRecursive(5);  //5*4*3*2 = 120
console.log(output)