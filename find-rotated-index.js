function findRotatedIndex(arr, num) {
    const pivotIdx = findPivotPoint(arr);
    // if num comes before pivot point
    if (pivotIdx > 0 && num >= arr[0] && num <= arr[pivotIdx - 1]) {
        return searchWithPivotIdx(arr, num, 0, pivotIdx - 1)
    }
    // if num comes after pivot point
    else {
        return searchWithPivotIdx(arr, num, pivotIdx, arr.length - 1)
    }
}

function findPivotPoint (arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
        return 0;
    }
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        }
        else if (arr[left] <= arr[middle]) {
            left = middle +1;
        }
        else {
            right = middle - 1
        }
    }
}

function searchWithPivotIdx (arr, num, left, right) {
    if (arr.length === 0 || arr[left] > num || arr[right] < num) {
        return -1;
    }

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === num) {
            return middle;
        }
        else if (num < arr[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1
}

console.log(findRotatedIndex([6,7,8,9,1,2,3,4,5], 1))

module.exports = findRotatedIndex