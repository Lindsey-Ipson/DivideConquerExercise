function countZeroes(arr) {
    if (arr[0] === 0) {
        return arr.length
    }
    let first0Idx = findFirst0(arr);
    if (first0Idx === -1) {
        return 0;
   }
   return arr.length - first0Idx;
}

function findFirst0(arr, left = 0, right = arr.length - 1) {
    if (right >= left) {
        let middle = left + Math.floor((right - left) / 2)
        debugger;
        if (arr[middle] === 0 && arr[middle - 1] === 1) {
            return middle
        }
        else if (arr[middle] === 1) {
            return findFirst0(arr, middle + 1, right)
        }
        else if (arr[middle] === 0 && arr[middle - 1] === 0) {
            return findFirst0(arr, left, middle - 1)
        }
    }
    else return -1;
}


module.exports = countZeroes