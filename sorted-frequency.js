function sortedFrequency(arr, num) {
    if (arr[0] === num && arr[0] === arr[arr.length - 1]) {
        return arr.length
    }
    if (arr[0] > num || arr[arr.length - 1] < num) {
        return -1
    }
    const first = findFirst(arr, num);
    const last = findLast(arr, num);
    if (first === -1) {
        return -1
    }

    return last - first + 1
}

function findFirst(arr, num, left = 0, right = arr.length - 1) {
    if (right >= left) {

        let middle = left + Math.floor((right - left) / 2)

        if (arr[middle] === num && arr[middle - 1] !== num) {
            return middle
        }

        else if (arr[middle] > num || arr[middle] === num) {
            return findFirst(arr, num, left, middle - 1)
        }

        else if (arr[middle] < num) {
            return findFirst(arr, num, middle + 1, right)
        }
        
    }
    else return -1;
}

function findLast (arr, num, left = 0, right = arr.length - 1) {
    if (right >= left) {

        let middle = left + Math.floor((right - left) / 2)

        if (arr[middle] === num && arr[middle + 1] !== num) {
            return middle
        }

        else if (arr[middle] < num || arr[middle] === num) {
            return findLast(arr, num, middle + 1, right)
        }

        else if (arr[middle] > num) {
            return findLast(arr, num, left, middle - 1)
        }
        
    }
    else return -1; 
}

module.exports = sortedFrequency