function binarySearch(arr, x, start, end) {
    if (start > end) return false;
    //Find middle index
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return true;
    } else if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid - 1);
    } else {
        return binarySearch(arr, x, mid - 1, end);
    }
}

 //Array to find
let arr = [1, 3, 5, 7, 8, 9],
//Value to find
    x = 0;

if (binarySearch(arr, x, 0, arr.length - 1)) {
    console.log('Finded!')
} else {
    console.log(`Can't find your value!`)
}