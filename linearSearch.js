//search one by one - linear search

function linearSearch(arr, elem) {
    
    for(let i = 0, len = arr.length; i < len; i++) {
        if(arr[i] === elem) {
            return i;
        }
    }
    return -1;
}

//test 
const arr = [1,5,2,3,4,5,12,34];

console.log(linearSearch(arr, -3))  //-1
console.log(linearSearch(arr, 3))  //2
console.log(linearSearch(arr, 5))  //1