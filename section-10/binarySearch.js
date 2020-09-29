/* 
------Binary Search------
- Function ini menerima input sebuah array dan sebuah value (2 input)
- Loop melalui array dan cek apakah element array saat ini sama dengan input value
- Jika iya, return index element array nya
- Jika value tidak ditemukan, return -1
*/

// Solusi 1
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] > value) {
      end = middle - 1;
    } else if (arr[middle] < value) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// Solusi 2
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
