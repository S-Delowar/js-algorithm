function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if(target === arr[mid]) {
            return mid;
        }

        if(target > arr[mid]) {
            left = mid + 1;
        }
        
        else {
            right = mid - 1;
        }
    }
    return -1
}

//test
const arr = [1,6,8,12,46,50]
console.log(binarySearch(arr, 12))  //3