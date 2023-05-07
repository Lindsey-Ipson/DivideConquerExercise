function findRotationCount(arr, left = 0, right = arr.length - 1) {
    // if array was passed through and no rotations found
    if (right < left) return 0;
    // if left and right narrowed down to same index (index of rotation)
    if (right === left) return right;

    let middle = Math.floor((left + right) / 2)

    // if element to the right of middle is the lowest element, i.e. array was rotated "middle + 1" number of times
    if (middle < right && arr[middle + 1] < arr[middle]) {
        return middle + 1;
    }

    // if middle itself is lowest element, i.e. array was rotated "middle" number of times
    if (middle > left && arr[middle] < arr[middle - 1]) {
        return middle;
    }

    // otherwise, keep searching through either left or right of array
    if (arr[right] > arr[middle]) {
        return findRotationCount(arr, left, middle - 1)
    }
    else {
        return findRotationCount(arr, middle + 1, right)
    }

}

module.exports = findRotationCount