function findFloor(arr, num, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    if (num >= arr[right]) {
        return arr[right];
    }

    let middle = Math.floor((left + right) / 2)

    if (middle > 0 && num < arr[middle] && arr[middle - 1] <= num) {
        return arr[middle - 1];
    }

    if (num < arr[middle]) {
        return findFloor(arr, num, left, middle - 1)
    }

    return findFloor(arr, num, middle + 1, right)

}

module.exports = findFloor