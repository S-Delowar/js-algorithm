function insertSort(arr) {
    
    for(let i = 1, len = arr.length; i < len; i++) {
        let j = i - 1;
        let  temp = arr[i];

        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = temp;
    }

    return arr;
}

//test 
console.log(insertSort([54,3,34,23,12,43,1,-3])) 
//[ -3,  1,  3, 12, 23, 34, 43, 54]
   
    