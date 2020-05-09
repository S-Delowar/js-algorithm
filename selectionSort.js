function selectionSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let min = i;
        
        for(let j = i + 1; j < len; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        
        if(min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }

    return arr;
}

//test
console.log(selectionSort([4,2,1,6,9,-3,0])) //ok
console.log(selectionSort([3, 0, 2, 5, -1, 4, 1])) //ok